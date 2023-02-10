const express = require('express');
const router = express.Router();
const {TechBlog,User} = require('../models');

router.get("/",(req,res)=>{
    TechBlog.findAll({
        include:[User]
    }).then(techData=>{
        console.log(techData)
        const hbsTech = techData.map(tech=>tech.toJSON())
        console.log('==============================')
        console.log(hbsTech)
        res.render("home",{
            allTech:hbsTech
        })
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.get("/profile",(req,res)=>{
    if(!req.session.userId){
        return res.redirect("/login")
    }
    User.findByPk(req.session.userId,{
        include:[TechBlog]
    }).then(userdata=>{
        console.log(userdata)
        const hbsData = userdata.toJSON();
        console.log('==============================')
        console.log(hbsData)
        res.render("profile",hbsData)
    })
    res.redirect("/sessions")
})

module.exports = router;