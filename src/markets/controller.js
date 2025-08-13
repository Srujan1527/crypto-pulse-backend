import {
  getCategoriesService,
  getCoinsService,
  getTrendingMarketCoinsService,
  getCategoryCoinsService,
} from "./service.js";

export const getCoins = async (req, res) => {
  try {
    const { vs_currency = "usd", category } = req.query;
    const data = await getCoinsService(vs_currency, category);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
export const getTrendingMarketCoins = async (req, res) => {
  try {
    const data = await getTrendingMarketCoinsService(req, res);
    // console.log(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const data = await getCategoriesService(req, res);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCategoryCoins = async (req, res) => {
  try {
    const data = await getCategoryCoinsService(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
