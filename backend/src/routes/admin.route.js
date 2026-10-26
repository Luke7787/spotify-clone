import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";
import { protectRoute, requiredAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, requiredAdmin, createSong);

export default router;
