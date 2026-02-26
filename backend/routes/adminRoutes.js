// routes/admin.js
import express from "express";
import { protect, superAdminOnly } from "../middleware/authMiddleware.js";
import { updateStandardAdminStatus } from "../controllers/adminControllers.js";

const router = express.Router();

// PUT /api/admin/status/:id
router.put(
  "/status/:id",
  protect,
  superAdminOnly,
  updateStandardAdminStatus,
);

export default router;
