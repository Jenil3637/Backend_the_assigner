import express from "express";
import { register, verifyOtp } from "../controllers/user.controller.js";
import { sendOtpForLogin, loginWithOtp } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/verify-otp").post(verifyOtp);
router.route("/send-otp-for-login").post(sendOtpForLogin);
router.route("/login-with-otp").post(loginWithOtp);

export default router;
 