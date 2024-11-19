
import sendOtpEmail from '../nodeMailer/sendGmail.js';
import crypto from 'crypto' 

const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const registerUser = async (req, res) => {
  const { email } = req.body; 

  if (!email) {
    return res.status(400).send('Email is required');
  }

  const otp = generateOtp();

  await sendOtpEmail(email, otp);

  return res.status(200).send('OTP sent to your email');
};

module.exports = { registerUser };
