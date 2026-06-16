import express from "express";

import { create, getAll, getOne, update, remove } from "./course.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { adminOnly } from "../../middleware/admin.middleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, create);

router.get("/", getAll);

router.get("/:id", getOne);

router.put("/:id", protect, adminOnly, update);

router.delete("/:id", protect, adminOnly, remove);

export default router;
