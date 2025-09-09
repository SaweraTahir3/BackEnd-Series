import mongoose  from "mongoose"

const UserSechma  = new mongoose.Sechma = ({
username: {
 type : string,
required: true ,
unique: true, 
lowercase: true, 
},
email : {
type : string,
required: true ,
unique: true, 
lowercase: true
},
password:{
type : string,
required: true ,
 } ,

} , {timestamp: true})


export const User =  mongoose.model("User", UserSchma)