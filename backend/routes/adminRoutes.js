import express from "express";
import {
  protect,
  superAdminOnly,
  authorize,
} from "../middleware/authMiddleware.js";
import {
  updateStandardAdminStatus,
  getPendingAdmins,
  getApprovedAdmins,
  getOnlineAdmins,
  deleteStandardAdmin,
  markUnderReview,
  approveApplication,
  rejectApplication,
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

//  Application review routes
router.put(
  "/review/:id",
  protect,
  authorize("super-admin", "standard-admin"),
  markUnderReview,
);
router.put(
  "/approve/:id",
  protect,
  authorize("super-admin", "standard-admin"),
  approveApplication,
);
router.put(
  "/reject/:id",
  protect,
  authorize("super-admin", "standard-admin"),
  rejectApplication,
);

export default router;
