let mongoose =require("mongoose");

let shopSchema=new mongoose.Schema({
   name:String,
   address:String,
   jstNo:{
    type:String,required:true,unique:true
   },
   category:String,
   seller:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
   products:[{type:mongoose.Schema.Types.ObjectId,ref:"product",autopopulate: true}]
})

shopSchema.plugin(require('mongoose-autopopulate'));
let Shop =mongoose.model("shop",shopSchema)

module.exports=Shop;