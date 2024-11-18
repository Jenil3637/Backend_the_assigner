import { User } from "../models/User.model.js"
import bcrypt from "bcrypt"
import sendMail from "../nodeMailer/sendGmail.js"

export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        };

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password do not match"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword
        });

        const otp = Math.floor(100000 + Math.random() * 900000); 

       
        await sendMail(email, otp); 

        return res.status(200).json({
            success: true,
            message: "User registered successfully"
        })


    } catch (error) {
        console.log(error)
    }
}