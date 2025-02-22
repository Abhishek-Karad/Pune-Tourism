const mongoose =require('mongoose');
// const { INTEGER } = require('sequelize');

const Schema = mongoose.Schema;

const hotelSchema=new Schema({
   name:
   {
        type:String,
        required:true
   },
   owner:
   {
        type:String ,
        required:true
   },
   imageURL1:{
     type:String,
     required:true
   },
   imageURL2:{
     type:String,
     required:true
   },
   imageURL3:{
     type:String,
     required:true
   },
   cost:
   {
        type:Number,
        required:true
   },
   address:
   {   
        type:String,
        required:true
   },
   feature_1:
   {
        type:Boolean,
        required:false
   },
   feature_2:
   {
        type:Boolean,
        required:false
   },
   feature_3:
   {
        type:Boolean,
        required:false
   },
   rating:
   {
        type:Number,
        required:true,
        min: 0,
        max: 5
   },
   contact:
   {
    type:Number,
    required:true
   }

   
});

module.exports=mongoose.model('hotel',hotelSchema);