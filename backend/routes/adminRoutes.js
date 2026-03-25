import express from "express";
import { protect, superAdminOnly } from "../middleware/authMiddleware.js";
import {
  updateStandardAdminStatus,
  getPendingAdmins,
  getApprovedAdmins,
  getOnlineAdmins,
  deleteStandardAdmin,
} from "../controllers/adminControllers.js";

const router = express.Router();

// GET approved admins
router.get("/approved", protect, superAdminOnly, getApprovedAdmins);
// GET pending admins
router.get("/pending", protect, superAdminOnly, getPendingAdmins);
// GET online admins
router.get("/online", protect, superAdminOnly, getOnlineAdmins);
// DELETE standard admin
router.delete("/delete/:id", protect, superAdminOnly, deleteStandardAdmin);

//  UPDATE status (approve/reject)
router.put("/status/:id", protect, superAdminOnly, updateStandardAdminStatus);

export default router;
