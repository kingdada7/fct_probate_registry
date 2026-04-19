import express from "express";
import {
  createApplication,
  getAllApplications,
  getApplicationById,
  getMyApplications,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationControllers";
import router from "./adminRoutes";
import { protect,adminOnly } from "../middleware/authMiddleware";

const router = express.Router();

// router.post("/draft", protect, saveDraft);
router.post("/", protect, createApplication);
// router.put("/submit/:id", protect, submitDraft);
router.get("/mine", protect, getMyApplications);
router.get("/:id", protect, getApplicationById);
router.delete("/:id", protect, deleteApplication);
router.put("/:id", protect, updateApplication);

// admin route
router.get("/", protect, adminOnly, getAllApplications);

export default router;
