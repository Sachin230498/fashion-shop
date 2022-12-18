let mongoose=require("mongoose")


let productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    category:String,
    price: { type: Number },
    gender:{type:String,enum:["men","women","kids"]},
    description:{type:String},
    images:[String],
    color: { type: String },
    details:[{
        size:String,
        quantity:Number,
        price:Number,
    }],
    seller:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    review:[{
        text:String,
        rating:{
            type:Number,
            min: 0, max: 5
        },
        auther:{
            author: {type:mongoose.Schema.Types.ObjectId,ref:"user"},
        }

    }]
})

let Product=mongoose.model("product",productSchema)
module.exports=Product 