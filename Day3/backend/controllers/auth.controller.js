import { User } from "../models/user.model.js";
import sendMail from "../nodeMailer/sendGmail.js";
import jwt from "jsonwebtoken";

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOtpForLogin = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    const otp = generateOtp();
    user.otp = otp;
    await user.save();

    await sendMail(email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

export const loginWithOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    user.otp = null; 
    await user.save();

    const tokenData = {
        userId: user._id
    }

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    return res.status(200).cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
        _id: user._id,
        name: user.name,
        success: true
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
