
const mongoose= require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the username"],
    },
    email:{
        type:String,
        required:[true,"Please add the email"],
        unique:[true,"Email should be unique"],
    },
    password:{
        type:String,
        required:[true,"Please add the Password"]
    },
},{timeStamps:true});

module.exports=mongoose.model("User",userSchema);