import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
 
} from "../controllers/authControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

//auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",protect, getUserProfile);
router.put("/profile",protect, updateUserProfile);


export default router;
