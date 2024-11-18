import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({   
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        index:true
    },
    contactInfo:{
        type: String
    },
    subject:{
        type: String,
        enum : ["General Enquiry", "IELTS", "english-coaching" , "other"],
        required: true
    },
    message:{
        type: String,
        required: true,
        maxlength: 125
    }

})

export const ContactUs = mongoose.model("ContactUs", contactUsSchema)