const express=require("express");
const Shop=require("../module/shop.model")
const Product=require("../module/product.module")
const User=require("../module/user.module")
const app=express.Router();
const {AdminAuth,Auth}=require("../middlewares/userAuth.middleware")


app.post("/register",Auth,async(req,res)=>{
    if(req.userType==="consumer"){
        return res.status(404).send("please register as a seller")
    }
    try{
        
        let createShop=await Shop.create({...req.body,seller:req.userId})
        return res.status(201).send({message:"shop registeration successfull",createShop})
    }catch(e){
        return res.status(401).send(e.message)
    }

})

app.post("/:id/addproduct",Auth,async(req,res)=>{

    let shop=req.params.id
    let seller=req.userId
    try{
        let product=await Product.create({seller,...req.body})
        let shopupadate=await Shop.updateOne({_id:shop},{$push:{products:product}})
        return res.status(201).send(shopupadate)
    }catch(e){
        res.status(404).send(e.message)
    }

   
})

app.get("/myshop",Auth,async(req,res)=>{
    try{

        let relate=await Shop.findOne({seller:req.userId})
        if(relate){
            return res.status(201).send(relate)
        }else{
            return res.status(401).send("shop is not there")
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }
})

module.exports=app