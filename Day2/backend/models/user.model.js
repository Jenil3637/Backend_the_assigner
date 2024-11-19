import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phoneNo:{
        type : String,
    },
    educationalQualification:{
        type : String,
    },
    currentLocation:{
        type : String,
    },
    cityState:{
        type : String,
    },
    additionalInformation:{
        type : String,
    },
    password : {
        type : String,
        required : true
    },
    profilePhoto :{ 
        type : String,
    },
    gender :{
        type : String,
        enum : ["male" , "female"],
        required : true
    }
} , {
    timestamps : true
})

export const User = mongoose.model("User" , userSchema)