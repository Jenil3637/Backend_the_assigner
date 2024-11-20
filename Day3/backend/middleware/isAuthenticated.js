
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token." });
    }

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    req.user = user; // Attach the user to req.user
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authorization failed." });
  }
};

export default isAuthenticated;
