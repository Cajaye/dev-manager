import { Router } from "express";
const router = Router();
import { login, createUser } from "../controllers/auth";

router.route("/register").post(createUser);
router.route("/login").post(login);

export default router;
