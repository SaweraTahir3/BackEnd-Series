import mongoose from "mongoose" 

cons doctorSchema = new mongoose.schema({








} , {timestamps : true})



export const doctor = mongoose.model("doctor" , doctorSchema)