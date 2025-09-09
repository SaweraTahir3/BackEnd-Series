import mongoose  from "mongoose"

const UserSchema  = new mongoose.Sechma = ({

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
lowercase: true,
},

password:{
type : string,
required: true ,
 } ,

} , {timestamps: true})


export const User =  mongoose.model("User", UserSchema)