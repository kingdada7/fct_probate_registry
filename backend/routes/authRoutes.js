import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/authControllers.js";

const router = express.Router();

//auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
 