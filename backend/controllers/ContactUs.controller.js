import { ContactUs } from "../models/ContactUs.model.js"

export const getContactUs = async (req, res) => {
    try {
        const { name, email, contactInfo, subject, message } = req.body

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const contactUs = await ContactUs.create({
            name,
            email,
            contactInfo,
            subject,
            message
        })

        return res.status(200).json({
            success: true,
            contactUs,
            message: "Contact us created successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

export const getAllMessages = async (req, res) => {
    try {
        const contactMessages = await ContactUs.find({}).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            contactMessages
        })
    } catch (error) {
        console.log(error)
    }
}

export const findMessagesByEmail = async (req,res) => {
    const { email } = req.params;
    try {
        const Messages = await ContactUs.find({email});;

        return res.status(200).json({
            success: true,
            Messages
        })
    } catch (error) {
        console.log(error)
    }
}