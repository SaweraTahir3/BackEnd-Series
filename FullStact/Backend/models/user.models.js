import mongoose, { Types } from "mongoose"

const UserSchma = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            min : [7 , `must be at least 7 `],
            max : 12 ,
        }

    }, { timestamps: true })

export const User = mongoose.model("User", UserSchma)