import express from "express";
import { findMessagesByEmail, getAllMessages, getContactUs } from "../controllers/ContactUs.controller.js";

const router = express.Router();

router.route("/SendMessage").post(getContactUs)
router.route("/getAllMessages").get(getAllMessages)
router.route("/:email/findMessagesByEmail").get(findMessagesByEmail)

export default router;