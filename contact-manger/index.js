const express =require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbconnection");
require('dotenv').config();
const { urlencoded } = require("body-parser");
const app =express();
const port=5000;

connectDb();
app.use(express.urlencoded({extended:true}));
// app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`listening on port:${port}`);
})