const path=require('path');
const express=require('express');

const router=express.Router();

const userController=require('../controllers/user');

//Get INDEX PAGE
router.get('/',userController.getIndex);

//getting each element 
router.get('/market',userController.displaymarket);

router.get('/restaurent',userController.displayRestaurent);

router.get('/activity',userController.displayActivities);

router.get('/hotel',userController.displayHotel);

//rendering specific view
router.get('/specific/hotel-spec/:id',userController.OneHotel);
router.get('/specific/restaurant-spec/:id',userController.OneRestaurant);
router.get('/specific/market-spec/:id',userController.OneMarket);
router.get('/specific/activity-spec/:id',userController.oneActivity)

module.exports=router;