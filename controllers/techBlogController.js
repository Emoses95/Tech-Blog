const express = require('express');
const router = express.Router();
const {User,TechBlog} = require('../models');

router.get("/",(req,res)=>{
    TechBlog.findAll().then(techData=>{
     res.json(techData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"error!",err})
    })
 })

 router.get("/:id",(req,res)=>{
    TechBlog.findByPk(req.params.id,{
     include:[User]
    }).then(techData=>{
     res.json(techData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"error!",err})
    })
 })

//  protects this route only logged in user can use techBlog
router.post("/",(req,res)=>{
    if(!req.session.userId){
       return res.status(403).json({msg:"login first post"})
    }
    console.log(req.body);
    TechBlog.create({
     tech:req.body.tech,
     //reads userid from session data instead of from req.body
     UserId:req.session.userId
    }).then(techData=>{
     res.json(techData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"error!",err})
    })
 })

 //  protected route to delete 
 router.delete("/:id",(req,res)=>{
    if(!req.session.userId){
       return res.status(403).json({msg:"login first"})
    }
    console.log(req.body);
    TechBlog.findByPk(req.params.id).then(techData=>{
       if(!techData){
          return res.status(404).json({msg:"cannot perform"})
       } else if(techData.UserId!== req.session.userId){
          return res.status(403).json({msg:""})
       }
       TechBlog.destroy({
        where:{
           id:req.params.id,
        }
       }).then(techData=>{
         res.json(techData)
        }).catch(err=>{
         console.log(err);
         res.status(500).json({msg:"error!",err})
        })
    }).catch(err=>{
         console.log(err);
         res.status(500).json({msg:"error!",err})
    })
 })
 
 module.exports = router;