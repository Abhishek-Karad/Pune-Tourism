const HotelContent=require('../model/hotel');
const restaurentContent=require('../model/restaurant');
const activityContent=require('../model/activity'); 
const marketContent=require('../model/market');
const csurf = require('csurf');
//Loading the Index page
exports.getIndex=(req,res,next)=>{
    res.render('shop/index',{
        path:'/',
        pageTitle:'Home',
        isAuthenticated:req.session.isLoggedin,
        csurfToken:req.csrfToken()

    });
}

//loading the comman listing and admin page
exports.manageListing=(req,res,next)=>{
    res.render('/admin/divert',{
        path:'/list-place',isAuthenticated:req.session.isLoggedin
    });
}

//loading the all hotel page
exports.displayHotel=(req,res)=>{
    HotelContent.find().lean().then(content=>{
        console.log(content);
        res.render('shop/hotel',{
            content:content,
            path:'/hotel',
            isAuthenticated:req.session.isLoggedin
        })
    })
    .catch(err=>{console.log(err)});
};

//loading the all restaurant page
exports.displayRestaurent=(req,res)=>{
    restaurentContent.find().lean().then(content=>{
        console.log(content);
        res.render('shop/restaurent',{
            content:content,
            path:'/restaurant',isAuthenticated:req.session.isLoggedin
        })
    })
    .catch(err=>{console.log(err)});

};

//loading the activity page
exports.displayActivities=(req,res)=>{
    activityContent.find().lean().then(content=>{
        console.log(content);
        res.render('shop/activity',{
            content:content,
            path:'/activity',
            isAuthenticated:req.isLoggedin
        })
    })
    .catch(err=>{console.log(err)})
};

//loading the market page
exports.displaymarket=(req,res)=>{
    marketContent.find().lean().then(content=>{
        console.log(content);
        res.render('shop/market',{
            content:content,
            path:'/market',
            isAuthenticated:req.isLoggedin
        })
    })
    .catch(err=>{console.log(err)});
}

//details of a hotel
exports.OneHotel=(req,res)=>{
  const hotelId=req.params.id;
    
    HotelContent.findById(hotelId).lean()
    .then(hotel=>{
        console.log(hotel);
        console.log(hotelId);
        res.render('shop/specific/hotel-spec',{
            content:hotel,
            path:'/specific/hotel-spec/:id',
            isAuthenticated:req.isLoggedin
        })
    })
}

//details of a restaurant
exports.OneRestaurant=(req,res)=>{
    const RestID=req.params.id;
    
    restaurentContent.findById(RestID).lean()
    .then(restaurant=>{
        console.log(restaurant);
        console.log(RestID);
        res.render('shop/specific/rest-spec',{
            content:restaurant,
            path:'/specific/restaurant-spec/:id',
            isAuthenticated:req.isLoggedin
        })
    })


}

//details of a market
exports.OneMarket=(req,res)=>{
    const MarketID=req.params.id;

    marketContent.findById(MarketID).lean()
    .then(market=>{
        console.log(market);
        console.log(MarketID);
        res.render('shop/specific/market-spec',{
            content:market,
            path:'/specific/market-spec/:id',
            isAuthenticated:req.isLoggedin
        })
    })
}

//details of a activity
exports.oneActivity=(req,res)=>{
    const activityID=req.params.id;
    activityContent.findById(activityID).lean()
    .then(activity=>{
        console.log(activity);
        console.log(activityID);

        res.render('shop/specific/activity-spec',{
            content:activity,
            path:'/specific/activity-spec/:id',
            isAuthenticated:req.isLoggedin
        })
    })
}