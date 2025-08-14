import { API_ROUTES, API_OPTIONS } from "../config/env.js";

export const getCoinsService = async (vs_currency, category) => {
  try {
    let url = `${API_ROUTES.getCoins}?vs_currency=${vs_currency}`;

    if (category) {
      url += `&category=${category}`;
    }
    // console.log("url", url);
    const response = await fetch(url, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Error fetching categories");
    }
    // console.log(response);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingMarketCoinsService = async (req, res) => {
  try {
    // console.log("Service");
    // console.log(API_ROUTES.getCoins);
    const response = await fetch(
      API_ROUTES.trendingMarketCoinsApi,
      API_OPTIONS
    );

    if (!response.ok) {
      throw new Error("Unable to fetch the data", response);
    }
    const data = await response.json();
    return data.coins;
  } catch (error) {
    throw error;
  }
};

export const getCategoriesService = async (req, res) => {
  try {
    const response = await fetch(API_ROUTES.getCategoriesApi, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Unable to fetch the data", response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryCoinsService = async (req, res) => {
  try {
    // console.log("req query", req.query);
    const response = await fetch(API_ROUTES.getCategoriesApi, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Unable to fetch the data", response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const coinDetailsService = async (id) => {
  try {
    const response = await fetch(
      `${API_ROUTES.getCoinDetails}/${id}`,
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error("Unable to fetch the data", response);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
