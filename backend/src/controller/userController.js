const jwt=require("jsonwebtoken");
const argon2 = require('argon2');
const User=require("../module/user.module")
const dustbin=require("../module/dustbin.model")
const userSignup=(async (req,res)=>{
     
    let {email,password,name,gender,role,pic,DOB,mobaile}=req.body
        password= await argon2.hash(password);
        if(role=="admin"){
            return res.send("wrong credentials")
        }
    try {
        let existinguser=await User.findOne({email})
        
        if(existinguser){
            res.status(401).send("user already exist")
        }
        else{
           try {
            let user =await User.create({
                pic,email,password,name,gender,role,DOB,mobile
            })
            res.status(201).send(user)
           }catch(e){
            res.status(404).send(e.message)
           }
        }
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
// -------------------------------------------------------------------------------------------------------
const userLogin=(async(req,res)=>{
    let {email,password}=req.body
    try{
        let data=await req.redis.get(email)
        data=JSON.parse(data)
       if(data){
        return res.send({message:"login sucessfull",...data})
        
       }
        let user=await User.findOne({email})

        if(user){
          let varifieduser=  await argon2.verify(user.password, password)
        if(varifieduser){
            let token=jwt.sign({id:user._id,email:user.email,role:user.role},process.env.TokenSecret,{expiresIn:"7 days"})
            let refresh=jwt.sign({id:user._id,email:user.email,role:user.role},process.env.RefreshSecret)
            let redisdata={token,refresh}
          req.redis.set(email,JSON.stringify(redisdata),"EX",30)
          console.log("mongo")
           
        return res.send({message:"login sucessfull",token,refresh})
            
        }else{
            return res.status(404).send("Invalid credentials")
        }
        
        }else{
            return res.status(404).send("user not found")
        }

    }catch(e){
       
        res.status(401).send(e.message)
    }
    
})

// -------------------------------------------------------------------------------------------------------

const RefreshUser=(async(req,res)=>{
    try{
        let refresh=req.headers["authorization"]
    let varify=jwt.verify(refresh,process.env.RefreshSecret)
    if(varify){
        let token=jwt.sign({id:varify.id,email:varify.email,role:user.role},process.env.TokenSecret,{expiresIn:"1 hours"})
        return res.send({message:"refresh done",token})

    }else{
        await dustbin.create({token})
        return res.status(404).send("login again")
    }
    }catch(e){
        res.status(401).send(e.message)
    }
})

// --------------------------------------------------------------------------------------------------------
const UserLogout=(async(req,res)=>{
    try {
        let token=req.headers["authorization"]
        let black= await dustbin.create({token})
        res.status(201).send("logout sucessfull")
    }catch(e){
        res.status(404).send(e.message)
    }

})

//-------------------------------------------------------------------------
const adminLogin=(async(req,res)=>{
    try{
        let {email,password,name}=req.body
        let user =await User.findOne({email,password,name})
        
        if(user.role=="admin"){
            
            let token=jwt.sign({id:user._id,role:user.role},process.env.ADMINSEC,{expiresIn:"20 minutes"}) 
            return res.status(201).send({message:`hello ${user.name}`,token})
        }else{
            res.status(404).send("sorry") 
        }
    }catch(e){
        res.status(404).send(e.message)
    }
})

//-------------------------------------------------------------------------

const singleUser=(async(req,res)=>{
try{
let user=await User.findById({_id:req.params.id},{password:0,_id:0})
return res.status(201).send(user)
}catch(e){
    res.status(404).send(e.message)
}
})

module.exports={userSignup,userLogin,RefreshUser,UserLogout,adminLogin,singleUser}