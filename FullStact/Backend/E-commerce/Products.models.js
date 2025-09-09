import mongoose from "mongoose"

const productSchema = new mongoose.schema({

name : {
type : String,
required: true ,
},

description: {
type : String,
required: true ,
},

productImage :{
type : String,
}, 


price: {
type : Number,
default: 0 ,
}, 


stock :{
 type : Number, 
default :0 ,
},


 category: {
 type: mongoose.Schema.Types.ObjectId,
ref : "category",
required: true,
},

owner :{
type : mongoose.Schema.Types.ObjectId ,
ref:"User" ,
},

}, {timestamps: true})


export const products = mongoose.model("products" , productSchema)