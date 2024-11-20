import { User } from "../models/user.model.js";
import { Course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
  try {
    const { name, description, course } = req.body;

    if (!name || !course) {
      return res.status(400).json({ success: false, message: "Name and course type are required." });
    }

    // Create a new course
    const newCourse = new Course({
      name,
      description,
      course
    });

    await newCourse.save();

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
      course: newCourse
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


export const joinCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user._id; 

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    if (course.users.includes(userId)) {
      return res.status(400).json({
        success: false,
        message: "User is already enrolled in this course"
      });
    }

    course.users.push(userId);
    await course.save();

    const user = await User.findById(userId);
    if (!user.courses) {
      user.courses = []; 
    }
    user.courses.push(courseId); 
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Successfully joined the course",
      course
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
