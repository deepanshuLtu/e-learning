import express from "express";
import { protect } from "../../middleware/auth.middleware.js";

import {
  enroll,
  getMyCourses,
  updateMyProgress,
} from "./enrollment.controller.js";

const router = express.Router();

router.post("/", protect, enroll);

router.get("/me", protect, getMyCourses);

router.patch("/:id/progress", protect, updateMyProgress);

export default router;
