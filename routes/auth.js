const path=require('path');
const express=require('express');
const router=express.Router();
const Authcontroller=require('../controllers/auth');

router.get('/login',Authcontroller.getlogin);
router.get('/signup',Authcontroller.getsignup);

router.post('/signup',Authcontroller.postsignup);
router.post('/login',Authcontroller.postlogin);

router.post('/logout',Authcontroller.postlogout);

module.exports=router;


