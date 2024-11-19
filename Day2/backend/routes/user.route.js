import express from "express";
import { getUser, login, Logout, register } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(Logout);
router.route("/").get(isAuthenticated ,getUser);

export default router 