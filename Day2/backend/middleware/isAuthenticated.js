import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token." });
    }

    // Attach user ID to the request object
    req.id = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authorization failed." });
  }
};

export default isAuthenticated;
