import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/Auth", userRoute);
app.use("/course", courseRoute);

const PORT = process.env.PORT || 5000;
  
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on ${PORT}`);
});