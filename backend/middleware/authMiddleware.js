import jwt from "jsonwebtoken";
import User from "../model/User.js";

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token; //  read from cookie

    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // Block suspended users
    if (user.status === "suspended") {
      return res.status(403).json({
        message: "Account suspended.",
      });
    }

    //  Update last activity
    await User.findByIdAndUpdate(user._id, {
      lastActive: new Date(),
    });

    // Block unapproved standard admins
    if (user.role === "standard-admin" && user.status !== "approved") {
      return res.status(403).json({
        message: "Your account is pending approval by a super-admin.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Not authorized, token invalid",
    });
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

// Middleware for role-based access control
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden: insufficient permissions",
      });
    }

    next();
  };
};

export { protect, superAdminOnly, authorize };
