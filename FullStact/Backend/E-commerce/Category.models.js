import mongoose from "mongoose" 

const categorySchema = new mongoose.Schema({

name :{
type : string,
required: true ,
}
},{ timestamps : true})


export const category = mongoose.model("category" , categorySchema)