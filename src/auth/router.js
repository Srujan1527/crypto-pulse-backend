import { Router } from "express";
import { signUp, login } from "./controller.js";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router;
