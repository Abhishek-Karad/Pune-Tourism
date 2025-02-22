const User=require('../model/user');
const bcrypt=require('bcryptjs');

exports.getlogin=(req,res)=>{
    res.render('auth/login',{
        path:'/login',
        isAuthenticated:req.session.isLoggedin
    })
};

exports.getsignup=(req,res)=>{
    res.render('auth/signup',{
        path:'/signup'
    })
};
//post 2 request for forms 

exports.postsignup = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(UserDOC => {
            if (UserDOC) {
                console.log("User Exists!");
                return res.redirect('/login'); 
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const user = new User({
                email: email,
                password: hashedPassword
            });
            return user.save();
        })
        .then(() => {
            res.redirect('/login');  // Move this inside `.then`
        })
        .catch(err => {
            console.log(err);
        });
};


exports.postlogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.redirect('/login'); 
            }

            return bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedin = true;
                        req.session.user = user;
                        return req.session.save(err => { 
                            if (err) console.log(err);
                            res.redirect('/'); 
                        });
                    }
                    return res.redirect('/login'); 
                });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login'); 
        });
};

exports.postlogout=(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    })
    
}