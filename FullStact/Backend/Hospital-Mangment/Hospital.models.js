import mongoose from 'mongoose'


const hospitalSchema = new mongoose.Schema({




},{timestamps : true})

export const hospital = mongoose.model("hospital" , hospitalSchema ) 