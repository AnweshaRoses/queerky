const router= require("express").Router();
const jwt = require("jsonwebtoken");
const User=require("../models/User");
const CryptoJs=require("crypto-js");
const bcrypt=require('bcrypt')
// Register

router.post("/register",async(req, res)=>{
    try{
    const salt= await bcrypt.genSalt(10)
    const hashedPass=await bcrypt.hash(req.body.password,salt)
    const newUser= new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
    });
    

        const user= await newUser.save();
        res.status(201).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {

      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong password or username!");

      const validate=await bcrypt.compare(req.body.password, user.password)
      const {password,...others}=user._doc
      if(validate){
         return res.status(200).json(others) 
      }
      else{

        return res.status(400).json("wrong credentials!")
      }

    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=router;