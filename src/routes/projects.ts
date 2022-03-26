import { Router } from "express";
const router = Router();
import { postProject, getProjectById } from "../controllers/projects";
router.route("/").post(postProject);
router.route("/:id").get(getProjectById);

export default router;
