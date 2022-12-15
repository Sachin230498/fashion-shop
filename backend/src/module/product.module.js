let mongoose=require("mongoose")


let productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    category:String,
    gender:{type:String,enum:["men","women","kids"]},
    desc:{type:String},
    image:[String],
    details:[{
        size:String,
        quantity:Number,
        price:Number,
    }],
    seller:{type:mongoose.Schema.Types.ObjectId,ref:"user",autopopulate: true},
    review:[{
        text:String,
        rating:{
            type:Number,
            min: 0, max: 5
        },
        auther:{
            author: {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        }

    }]
})

let Product=mongoose.model("product",productSchema)
module.exports=Product 