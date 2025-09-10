import mongoose from 'mongoose'


const patientSchema = new mongoose.Schema ({
 name :{
 type : String,
required : true, 
lowercase : true,
}, 
dragonsWidth: {
type : String,
required : true, 
},

address: {
type : String,
required : true, 
},

age:{
type : Number,
required : true,
},

bloodGroup:{
type : String,
required : true, 
},

gender:{
type : String,
enum:['M' , 'F' , 'o'],
required : true, 
},

adimentIn : {
type : mongoose.Schema.Types.ObjectId, 
ref : 'Hospital',
},

},{timestamps : true})



export const Patient = mongoose.model("Patient" , patientSchema )