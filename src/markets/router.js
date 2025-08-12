import { Router } from "express";

import { getCategories } from "./controller.js";

const router = Router();

router.get(`/coins/markets`, getCategories);

export default router;
