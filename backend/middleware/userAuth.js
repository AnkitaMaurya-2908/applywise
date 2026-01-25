import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = { id: decoded.id }; 

    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default userAuth;
