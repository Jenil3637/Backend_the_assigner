// course.route.js
import express from "express";
import { joinCourse, createCourse } from "../controllers/course.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/join-course").post(isAuthenticated, joinCourse);

// Route to create a new course (for admins)
router.route("/create-course").post(isAuthenticated, createCourse);

export default router;
