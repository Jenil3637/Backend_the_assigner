import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    otp: {
        type: String,
        default: null
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }]
},{
    timestamps: true
})
 
export const User = mongoose.model("User", UserSchema)