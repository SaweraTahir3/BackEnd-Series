import mongoose from "mongoose" 

cons doctorSchema = new mongoose.schema({


name : {
type : String,
required : true, 
},

salary: {
type : String,
required : true, 
},
qualification : {
type : String,
required : true, 
},

experienceInYears : {
type : Number,
default: 0
},

workInHospital : [
{
type : mongoose.Schema.Types.ObjecTId ,
ref : "Hospital", 

}
],

} , {timestamps : true})



export const Doctor = mongoose.model("Doctor" , doctorSchema)