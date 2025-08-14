import { Router } from "express";

import {
  getCoins,
  getTrendingMarketCoins,
  getCategories,
  getCoinDetails,
} from "./controller.js";

const router = Router();

router.get(`/coins/markets`, getCoins);
router.get(`/search/trending`, getTrendingMarketCoins);
router.get("/coins/categories", getCategories);
router.get("/coins/:id", getCoinDetails);

export default router;
