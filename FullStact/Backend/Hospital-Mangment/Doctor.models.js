import mongoose from "mongoose" 

cons doctorSchema = new mongoose.schema({








} , {timestamps : true})



export const Doctor = mongoose.model("Doctor" , doctorSchema)