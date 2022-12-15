const express=require("express");
const app=express.Router();
const {AdminAuth}=require("../middlewares/userAuth.middleware")
const {userSignup,userLogin,RefreshUser,UserLogout,adminLogin,singleUser}=require("../controller/userController")
app.post("/signup",userSignup)

app.post("/login",userLogin)

app.get("/:id",AdminAuth,singleUser)

app.post("/refresh",RefreshUser)

app.post("/logout",UserLogout)

app.post("/admin/login",adminLogin)

module.exports=app