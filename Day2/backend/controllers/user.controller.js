import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { userName , email , phoneNo , educationalQualification , currentLocation , cityState , additionalInformation , password, confirmPassword, gender } = req.body
        if(!userName || !email || !password || !confirmPassword || !gender){
            return res.status(400).json({
                message: "Username , email , password , confirm password and gender are required",
                success: false
            })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            })
        }

        const user = await User.findOne({ userName })

        if (user) {
            return res.status(400).json({
                message: "User already exists with current Username !"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        //Profile Photo
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`;


        await User.create({
            userName,
            email,
            phoneNo,
            educationalQualification,
            currentLocation,
            cityState,
            additionalInformation,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body

        if (!userName || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ userName })

        if (!user) {
            return res.status(400).json({ 
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect password"
            })
        }

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })

        return res.status(200).cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePhoto: user.profilePhoto,
            success: true
        });

    } catch (error) {
        console.log(error)
    }
}

export const Logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully."
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.id).select("-password");
        return res.status(200).json({
            _id: user._id,
            userName: user.userName,
            email : user.email,
            phoneNo : user.phoneNo,
            educationalQualification : user.educationalQualification,
            currentLocation : user.currentLocation,
            cityState : user.cityState,
            additionalInformation : user.additionalInformation,
            profilePhoto: user.profilePhoto,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}