import express ,{urlencoded}from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongodb.js";
import ContactUsRoute from "./routes/ContactUs.route.js"

dotenv.config({})

const app = express();


//middlewares
app.use(express.json());
app.use(urlencoded({extended:true}));


app.use("/ContactUs", ContactUsRoute);

const PORT = process.env.PORT || 5000

app.listen (PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})