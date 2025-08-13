import { Router } from "express";

import {
  getCoins,
  getTrendingMarketCoins,
  getCategories,
} from "./controller.js";

const router = Router();

router.get(`/coins/markets`, getCoins);
router.get(`/search/trending`, getTrendingMarketCoins);
router.get("/coins/categories", getCategories);

export default router;
