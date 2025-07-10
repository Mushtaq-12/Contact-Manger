const mongoose =require("mongoose")

const connectDb=async ()=>{
    try{
        const connect =await mongoose.connect("mongodb://localhost:27017/mycontact");
        console.log("Database connected",connect.connection.host);
    }catch(err){
        console.log(err);
        process.exit(1);
    }

}
module.exports=connectDb;