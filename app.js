const path = require("path");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const mongoose = require("mongoose");
const mongodbstore=require('connect-mongodb-session')(session);
const csurf=require('csurf');

const MONGODBURL =
  "mongodb+srv://abhishekkarad29:vUHRQR1BneEOPoB2@cluster0.26upo.mongodb.net/tourism";

const AdminRoutes = require("./routes/admin");
const UserRoutes = require("./routes/user");
const AuthRoutes = require("./routes/auth");
const User=require('./model/user');
const app = express();


const store=new mongodbstore({
    uri:MONGODBURL,
    collection:'sessions',
    
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Set up Handlebars view engine
app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "views");


app.use(
  session({
    secret: "thisisabigsecret",
    resave: false,
    saveUninitialized: false,
    store:store
  })
);


const csurfProtection=csurf();
app.use(csurfProtection);


app.use((req,res,next)=>{
  res.locals.isAuthenticated=req.session.isLoggedIn;
  res.locals.csrfToken=req.csrfToken();
  next();
})

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});
// Use routes
app.use("/admin", AdminRoutes);
app.use(UserRoutes);
app.use(AuthRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("Database Connected");
    app.listen(9000);
  })
  .catch((err) => {
    console.log(err);
  });
