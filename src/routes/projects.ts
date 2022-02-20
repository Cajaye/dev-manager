import { Router } from "express";
const router = Router();
import { postProject } from "../controllers/projects";
router.route("/").post(postProject);

export default router;
