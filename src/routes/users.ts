import { Router } from "express";
export const router = Router();
import { getAllUsers, createUser } from "../controllers/users";
import { authorizeUser } from "../middleware/authentication";

router.route("/").get(authorizeUser, getAllUsers).post(createUser);

export default router;
