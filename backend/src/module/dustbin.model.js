let mongoose =require("mongoose");

let dustbinSchema=new mongoose.Schema({
    token:String
})

let dustbin =mongoose.model("dustbin",dustbinSchema)

module.exports=dustbin;