const jwt=require("jsonwebtoken");
const User=require("../module/user.module")
const dustbin=require("../module/dustbin.model")

const Auth=async (req,res,next)=>{
    let token=req.headers["authorization"]
    if(!token){
      return  res.status(404).send("You can not perform this action")
    }
    try{
        let blaclist=await dustbin.findOne({token})
        if(blaclist){
            return res.status(401).send("invalid token")
        }
        let varification= jwt.verify(token,process.env.TokenSecret)
        if(varification){
            next()
        }else{
            res.status(401).send("invalid token")
        }
    }catch(e){
        if(e.message=="jwt expired"){
           try{
            let black= await dustbin.create({token})
           }catch(e){
            return res.status(404).send(e.message)
        }
        }
        return res.status(404).send(e.message)
    }
     
}

const AdminAuth=async (req,res,next)=>{
    try{
        let token=req.headers["authorization"]
        let blaclist=await dustbin.findOne({token})
        if(blaclist){
            return res.status(401).send("invalid token")
        }
        if(token){
            let varification=jwt.verify(token,process.env.ADMINSEC)

            if(varification){
                req.userType="admin"
                console.log("admin ")
                next()
            }else{
                return res.status(404).send("oprations not allowed")
            }
        }else{
            return res.status(404).send("oprations not allowed")
        }
    }catch(e){
        return res.status(404).send("oprations not allowed")
    }

}

module.exports={Auth,AdminAuth}