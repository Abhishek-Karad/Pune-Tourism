const path=require('path');
const express=require('express');
const router=express.Router();
const adminController=require('../controllers/admin');
const isAuth=require('../middleware/is-auth');

//index page
router.get('/',adminController.getindex);

//comman listing page
router.get('/list-place',isAuth,adminController.getdivert);

//Hotel 
router.get('/list-place/hotel-form',isAuth,adminController.gethotelform);
router.post('/list-place/hotel-form',isAuth,adminController.posthotelform);
router.get('/view-hotels',isAuth,adminController.viewHotels);
router.post('/delete-hotel',isAuth,adminController.DeleteHotel);
router.get('/edit-hotel/:id',isAuth,adminController.getedithotel);
router.post('/edit-hotel',isAuth,adminController.postedithotel);


//Restuarant
router.get('/list-place/restaurent-form',isAuth,adminController.getrest);
router.post('/list-place/restaurent-form',isAuth,adminController.postrestauraentform);
router.get('/view-restaurants',isAuth,adminController.viewRestaurants);
router.post('/delete-Restaurant',isAuth,adminController.DeleteRest);
router.get('/edit-restaurant/:id',isAuth,adminController.geteditrest);
router.post('/edit-restaurant',isAuth,adminController.posteditrestaurant);

//Activity
router.get('/list-place/activity-form',isAuth,adminController.getactivity);
router.post('/list-place/activity-form',isAuth,adminController.postactivityform);
router.get('/view-activities',isAuth,adminController.viewActivity);
router.post('/delete-activity',isAuth,adminController.DeleteActivity);

//Market 
router.get('/list-place/market-form',isAuth,adminController.getmarket);
router.post('/list-place/market-form',isAuth,adminController.postmarketform);
router.get('/view-markets',isAuth,adminController.viewMarket);
router.post('/delete-Market',isAuth,adminController.DeleteMarket);



module.exports=router;