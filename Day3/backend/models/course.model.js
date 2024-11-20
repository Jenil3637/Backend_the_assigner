import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    course: {
        type: String,
        enum: ["UI/UX", "Frontend", "Backend", "Fullstack", "App" , "Api"],
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

export const Course = mongoose.model("Course", CourseSchema);
