const hotelContent=require('../model/hotel');
const restaurantContent=require('../model/restaurant');
const activitycontent=require('../model/activity');
const marketcontent=require('../model/market');
const hotel = require('../model/hotel');
const csrf=require('csurf');
const restaurant = require('../model/restaurant');
//Get INDEX
exports.getindex=(req,res,next)=>{
    res.render('/shop/index',{
        path:'/',
        isAuthenticated:req.session.isLoggedin,
        csrfToken:req.csrfToken()
    });
}
//loading a comman add page
exports.getdivert=(req,res,next)=>{
    res.render('admin/divert',{
        path:'/admin/list-place',
        isAuthenticated:req.session.isLoggedin,
        csrfToken:req.csrfToken()
    });
}
//activities-form
exports.getactivity=(req,res,next)=>{
    res.render('admin/activity-form',{
        path:'/admin/list-place/activity-form',
        isAuthenticated:req.session.isLoggedin
        ,csrfToken:req.csrfToken()
    })
}
//hotel-form
exports.gethotelform=(req,res,next)=>{
    res.render('admin/hotel-form',{
        path:'/admin/list-place/hotel-form',
        isAuthenticated:req.session.isLoggedin,
        csrfToken:req.csrfToken()
    });
}
//market-form
exports.getmarket=(req,res,next)=>{
    res.render('admin/market-form',{
        path:'/admin/list-place/market-form',
        isAuthenticated:req.session.isLoggedin
    })
}
//restaurant-form
exports.getrest=(req,res,next)=>{
    res.render('admin/restaurent-form',{
        path:'/admin/list-place/restaurent-form',
        isAuthenticated:req.session.isLoggedin
        ,csrfToken:req.csrfToken()
    });
}

//POST HOTEL 
exports.posthotelform=(req,res,next)=>{
    const title=req.body.title;
    const owner=req.body.owner;
    const cost=req.body.price;
    const address=req.body.address;
    const f1 = req.body.amenities_1? true : false;
    const f2 = req.body.amenities_2 ? true : false;
    const f3 = req.body.amenities_3? true : false;
    const imageURL1=req.body.imageURL1;
    const imageURL2=req.body.imageURL2;
    const imageURL3=req.body.imageURL3;
    const rating=req.body.rating;
    const contact=req.body.contact;
    
    const Place= new hotelContent({
      name:title,
      owner:owner,
      cost:cost,
      address:address,
      feature_1:f1,
      feature_2:f2,
      feature_3:f3,
      rating:rating,
      contact:contact,
      imageURL1:imageURL1,
      imageURL2:imageURL2,
      imageURL3:imageURL3
})
    Place.save()
    .then(result=>{
        console.log("Data Uploaded");
        res.redirect('/');
    }
    ).catch(err=>{
        console.log(err);
    })
};

//POST Restaurant 
exports.postrestauraentform=(req,res)=>{
    const title=req.body.title;
    const owner=req.body.owner;
    const price = req.body.price;
    const address=req.body.address;
    const contact=req.body.contact;
    const ft1=req.body.amenities_1 ?true:false;
    const ft2=req.body.amenities_2 ?true:false;
    const ft3=req.body.amenities_3 ?true:false;
    const rating =req.body.rating;
    const imageURL1=req.body.imageURL1;
    const imageURL2=req.body.imageURL2;
    const imageURL3=req.body.imageURL3;

    const restaurantData=new restaurantContent({
        name:title,
        owner:owner,
        address:address,
        contact:contact,
        price:price,
        feature_1:ft1,
        feature_2:ft2,
        feature_3:ft3,
        rating:rating,
        imageURL1:imageURL1,
        imageURL2:imageURL2,
        imageURL3:imageURL3
    })
    restaurantData.save()
    .then(result=>{
        console.log("Data has been stored");
        res.redirect('/restaurent');

})
    .catch(err=>{console.log(err)});
}

//POST ACTIVITY
exports.postactivityform=(req,res)=>{
    const title=req.body.title;
    const price=req.body.price;
    const address=req.body.address;
    const contact=req.body.contact;
    const ft_1=req.body.amenities_1 ?true:false;
    const ft_2=req.body.amenities_2 ?true:false;
    const ft_3=req.body.amenities_3 ?true:false;
    const rating=req.body.rating;
    const owner=req.body.owner;
    const imageURL=req.body.imageURL

    const activityData= new activitycontent({
        name:title,
        organizer:owner,
        price:price,
        feature_1:ft_1,
        feature_2:ft_2,
        feature_3:ft_3,
        rating:rating,
        contact:contact,
        address:address,
        imageURL:imageURL
    })
    activityData
    .save()
    .then(result=>{
        console.log("Data has been stored!");
        res.redirect('/activity');
    })
    .catch(err=>{
        console.log(err);
    })

};

//POST MARKET
exports.postmarketform=(req,res)=>{
    const name=req.body.title;
    const owner=req.body.owner;
    const price=req.body.price;
    const address=req.body.address;
    const contact=req.body.contact;
    const ft1=req.body.amenities_1 ?true:false;
    const ft2=req.body.amenities_2 ?true:false;
    const ft3=req.body.amenities_3 ?true:false;
    const rating=req.body.rating;
    const imageURL1=req.body.imageURL1;
    const imageURL2=req.body.imageURL2;
    const imageURL3=req.body.imageURL3;


    const Market_data= new marketcontent({
       name:name,
       owner:owner,
       cost:price,
      address:address,
      contact:contact,
      feature_1:ft1,
      feature_2:ft2,
      feature_3:ft3,
      rating:rating,
      imageURL1:imageURL1,
      imageURL2:imageURL2,
      imageURL3:imageURL3

    })

    Market_data
    .save()
    .then(result=>{
        console.log("Data Uploaded!");
        res.redirect('/market');
    })
    .catch(err=>{
        console.log(err);
    })
};



//ADMIN HOTEL
exports.viewHotels=(req,res)=>{
    hotelContent.find().lean()
    .then(content=>{
        console.log(content);
        res.render('admin/hotel-admin',{
            content:content,
            path:'/admin/view-hotels',
            isAuthenticated:req.session.isLoggedin,csrfToken:req.csrfToken()

        })
    })
    .catch(err=>{console.log(err)});
    
}

//ADMIN Restaurant
exports.viewRestaurants=(req,res)=>{
    restaurantContent.find().lean()
    .then(
        content=>{
            console.log(content);
            res.render('admin/restaurent-admin',{
                content:content,
             path:'/admin/view-restaurants',
             isAuthenticated:req.session.isLoggedin,csrfToken:req.csrfToken()
            
            })
        }
    )
}

//ADMIN MARKET
exports.viewMarket=(req,res)=>{
    marketcontent.find().lean()
    .then(
        content=>{
            console.log(content);
            res.render('admin/market-admin',{
                content:content,
                path:'/admin/view-market',
                isAuthenticated:req.session.isLoggedin,csrfToken:req.csrfToken()
            })
        }
        
    )
}

//ADMIN ACTIVITY
exports.viewActivity=(req,res)=>{
    activitycontent.find().lean()
    .then(
        content=>{
            console.log(content);
            res.render('admin/activity-admin',{
                content:content,
                path:'/admin/view-activities',
                isAuthenticated:req.session.isLoggedin,csrfToken:req.csrfToken()
            })
        }
    )
}

//DELETE HOTEL
exports.DeleteHotel=(req,res)=>{
    const hotelID=req.body._id;
    hotelContent.deleteOne({_id:hotelID}).then(()=>{
        console.log("Deleted!!");
        res.redirect('/hotel');
    })
    .catch(err=>{
        console.log(err);
    })
}

//DELETE Restaurant
exports.DeleteRest=(req,res)=>{
    const RestID=req.body._id;
    restaurantContent.deleteOne({_id:RestID}).then(
        ()=>{
            console.log("Deleted!");
            res.redirect('/restaurent');
        }
    ).catch(err=>{
        console.log(err);
    })
}

//DELETE MARKET
exports.DeleteMarket=(req,res)=>{
    const MartID=req.body._id;
    marketcontent.deleteOne({_id:MartID})
    .then(()=>{
        console.log("Deleted! ");
        res.redirect('/market');
    })
    .catch(err=>{
        console.log(err);
    })
}

//DELETE ACTIVITY
exports.DeleteActivity=(req,res)=>{
    const ActID=req.body._id;
    activitycontent.deleteOne({_id:ActID})
    .then(
        ()=>
        {
            console.log("Deleted!");
            res.redirect('/activity');
        }
    )
    .catch(err=>{
        console.log(err);
    })
}

//GET EDIT AND POST EDIT 

exports.getedithotel=(req,res)=>{
    const hotelID=req.params.id;
    hotelContent.findById(hotelID).lean()
    .then(content=>{
        console.log(content);
        res.render('admin/edit/hotel-edit',{
            content:content,
            path:'/edit-hotel',
            isAuthenticated:req.session.isLoggedin,
            csrfToken:req.csrfToken()
        })
}).catch(err=>{
    console.log(err);
})
}

exports.postedithotel = (req, res) => {
    const id = req.body._id; // Get hotel ID from form

    hotelContent.findById(id)
        .then(hotel => {
            if (!hotel) {
                console.log("Hotel not found!");
               return res.redirect('/admin/list-place')
               
                //return res.status(404).send("Hotel not found"); // ✅ Prevent further execution
            }

            // Update hotel details
            hotel.name = req.body.title;
            hotel.owner = req.body.owner;
            hotel.cost = req.body.price;
            hotel.address = req.body.address;
            hotel.feature_1 = req.body.amenities_1 ? true : false;
            hotel.feature_2 = req.body.amenities_2 ? true : false;
            hotel.feature_3 = req.body.amenities_3 ? true : false;
            hotel.imageURL1 = req.body.imageURL1;
            hotel.imageURL2 = req.body.imageURL2;
            hotel.imageURL3 = req.body.imageURL3;
            hotel.rating = req.body.rating;
            hotel.contact = req.body.contact;

            return hotel.save();
        })
        .then(() => {
            console.log("Hotel Updated Successfully");
            res.redirect("/"); // ✅ Ensure only one response is sent
        })
        .catch(err => {
            console.log(err);
        });
};

exports.geteditrest=(req,res)=>{
    const restID=req.params.id;
    restaurantContent.findById(restID).lean()
    .then(content=>{
        console.log(content);
        res.render('admin/edit/rest-edit',{
            content:content,
            path:'edit-restaurant',
            isAuthenticated:req.session.isLoggedin,
            csrfToken:req.csrfToken()
        })
        
    })
}

exports.posteditrestaurant=(req,res)=>{
    const id=req.body._id;

    restaurantContent.findById(id)
    .then(rest=>{
        if(!rest){
            console.log("Restaurant not found");
            return res.redirect('/amdin/list-place');
        }

        rest.name=req.body.title;
        rest.owner=req.body.owner;
        rest.price=req.body.price;
        rest.address=req.body.address;
        rest.feature_1 = req.body.amenities_1 ? true : false;
        rest.feature_2 = req.body.amenities_2 ? true : false;
        rest.feature_3 = req.body.amenities_3 ? true : false;
        rest.rating=req.body.rating;
        rest.contact=req.body.contact;
        rest.imageURL1=req.body.imageURL1;
        rest.imageURL2=req.body.imageURL2;
        rest.imageURL3=req.body.imageURL3;

        return rest.save();

    })
    .then(() => {
        console.log("Restaurant Updated Successfully");
        res.redirect("/"); 
    })
    .catch(err => {
        console.log(err);
    });
}