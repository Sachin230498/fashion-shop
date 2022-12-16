require("dotenv").config()

const http=require("http")
let express =require("express")
let cors=require("cors")
let PORT=process.env.PORT
let connect=require("./config/db")
let userRoute=require("./routes/user.route")
let shopRoute=require("./routes/shop.route")
// let passport=require("./features/oauth/githubAuth")
const {Server}=require("socket.io")
const Redis = require('ioredis');
const fs = require('fs');

// const redis = new Redis({
//     host: 'redis-12521.c246.us-east-1-4.ec2.cloud.redislabs.com',
//     port: 12521,
//     password: 'T4c2Hc8aDhemxBf69YrM5trlissMYgCS'
// });



const app=express()
const httpServer=http.createServer(app)
const io=new Server(httpServer)
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
// req.redis=redis
next()
})
app.use("/users",userRoute)
app.use("/shop",shopRoute)



httpServer.listen(PORT,async ()=>{
 await connect()

  console.log("listening on port 8080 ")
})