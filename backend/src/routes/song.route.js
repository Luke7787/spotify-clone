import { Router } from "express";

const router = Router();

router.get("/", getAllSongs);

export default router;
