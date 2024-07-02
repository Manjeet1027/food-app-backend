const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const jwtSecret = "ThisIsA32CharacterSecretKey123!!"

router.use("/createuser",[
  body("email").isEmail(),
  body("name").isLength({min:5}),
  body("password","Incorrect PassWord!!!").isLength({min:5})
],
 async(req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ error : errors.array()});
  }

  const salt = await bcrypt.genSalt(10);
  let securePass = await bcrypt.hash(req.body.password, salt);

  // console.log("Original Password:", req.body.password);
  // console.log("Hashed Password:", securePass);

  try{
    await User.create({
      name :req.body.name,
      location: req.body.location ,
      email : req.body.email,
      password : securePass
    })
    res.json({success: true})
  }
  catch(err){
    console.log(err);
    res.json({success: false})
  }
})

router.use("/loginuser",
  [
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min : 5 })
],
 async(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ error : errors.array()});
  }

  let email = req.body.email;

  try{
    let userData = await User.findOne({email});
    if(!userData){
      return res.status(400).json({ error : "Try logging with correct credentials"});
    }

    const passCompare = await bcrypt.compare(req.body.password, userData.password)

    // console.log("Password Comparison:", passCompare);
    // console.log("Entered Password:", req.body.password);
    // console.log("Stored Hashed Password:", userData.password);

    if(!passCompare){
    // if(req.body.password !== userData.password){
      return res.status(400).json({ error : "Try logging with correct credentials"});
    }
    const data = {
      user :{
        id : userData.id
      }
    }
    const authToken  = jwt.sign(data, jwtSecret);
    return res.json({success : true, authToken : authToken
    })
  }
  catch(err){
    console.log(err);
    res.json({success: false})
  }
  
})

module.exports = router

