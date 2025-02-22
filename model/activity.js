const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ActivitySchema =new Schema({
    name:{
        type:String,
        required:true
    },
    organizer:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    feature_1:{
        type:Boolean,
        required:false
    },
    feature_2:{
        type:Boolean,
        required:false
    },
    feature_3:{
        type:Boolean,
        required:false
    },
    contact:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('activitycontent',ActivitySchema);//send the model to create and also to be a part of controller