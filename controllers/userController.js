const express = require('express');
const router = express.Router();
const {User,TechBlog} = require('../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
   User.findAll().then(userData=>{
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error!",err})
   })
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("logged out")
})


router.get("/:id",(req,res)=>{
   User.findByPk(req.params.id,{
    include:[TechBlog]
   }).then(userData=>{
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error!",err})
   })
})

router.post("/",(req,res)=>{
    console.log(req.body);
   User.create({
    email:req.body.email,
    password:req.body.password
   }).then(userData=>{
    req.session.userId = userData.id;
    req.session.userEmail = userData.email;
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error!",err})
   })
})
router.post("/login",(req,res)=>{
   User.findOne({
   where:{
    email:req.body.email
   }
   }).then(userData=>{
    if(!userData){
        return res.status(401).json({msg:"incorrect email or password"})
    } else {
        if(bcrypt.compareSync(req.body.password,userData.password)){
            req.session.userId = userData.id;
            req.session.userEmail = userData.email;
            return res.json(userData)
        } else {
            return res.status(401).json({msg:"incorrect email or password"})
        }
    }
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error",err})
   })
})




module.exports = router;