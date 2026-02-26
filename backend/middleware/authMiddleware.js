import jwt from "jsonwebtoken";
import User from "../model/User.js";

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Block unapproved standard admins
      if (user.role === "standard-admin" && user.status !== "approved") {
        return res.status(403).json({
          message: "Your account is pending approval by a super-admin.",
        });
      }

      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

// Middleware for admin routes
const superAdminOnly = (req, res, next) => {
  if (req.user && req.user.role === "super-admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Super-admin only." });
  }
};

export { protect, superAdminOnly };
