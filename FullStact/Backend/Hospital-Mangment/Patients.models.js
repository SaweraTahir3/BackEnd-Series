import mongoose from 'mongoose'


const patientSchema = new mongoose.Schema ({
 name :{
 type : String,
required : true, 
lowercase : true,
}


},{timestamps : true})



export const Patient = mongoose.model("Patient" , patientSchema )