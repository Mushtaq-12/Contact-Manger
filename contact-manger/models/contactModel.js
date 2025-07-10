const { timeStamp } = require("console");
const mongoose=require("mongoose")
const { type } = require("os")

const contactSchema=mongoose.Schema({
    
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:[true,"Please add the name"]
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Please add the Email"]
    },
    phone:{
        type:String,
        required:[true,"please add the phone number"]
    }
},{timeStamps:true});

module.exports=mongoose.model("Contact",contactSchema);