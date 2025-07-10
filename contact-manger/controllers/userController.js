// REgister a user
// using post /api/users/register
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
//   console.log(req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already Exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10); //10 is no of rounds
  console.log("hashed password:", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("user created", user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid");
  }
 
});



const loginUser = asyncHandler(async (req, res) => {
  const{email,password}=req.body;
  if(!email || !password){
    res.status(400)
    throw new Error("All feilds are Mandatory!");
  }
  const user =await User.findOne({email});
  // compare password with hashed paasword
  if(user && (await bcrypt.compare(password,user.password))){
    const accesstoken =jwt.sign({
      user:{
        username:user.username,
        email:user.email,
        id:user.id,
      },
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"});
    res.status(200).json({accesstoken})
  }
  else{
    res.status(401)
    throw new Error("Email or passwors is not valid");
  }
});



const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
