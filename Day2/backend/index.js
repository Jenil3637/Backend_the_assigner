import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/user" , userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> {
    connectDB();
    console.log(`server is running on ${PORT}`);
}) 