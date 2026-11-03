import { Router } from "express";
import { createSong, deleteSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/songs", protectRoute, requiredAdmin, createSong);
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);

export default router;
