const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const marketSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    address:{
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
    rating:{
        type:Number,
        required:true
    },
    cost:{
        type:Number,
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
    }
});

module.exports=mongoose.model('marketcontents',marketSchema);