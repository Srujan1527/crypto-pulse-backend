import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  CRYPTO_BASE_URL: process.env.CRYPTO_BASE_URL,
  CRYPTO_API_KEY: process.env.CRYPTO_API_KEY,
  CRYPTO_HEADER: process.env.CRYPTO_HEADER,
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    [ENV.CRYPTO_HEADER]: ENV.CRYPTO_API_KEY,
  },
};

export const API_ROUTES = {
  getCoins: `${ENV.CRYPTO_BASE_URL}/coins/markets`,
  trendingMarketCoinsApi: `${ENV.CRYPTO_BASE_URL}/search/trending?vs_currency=usd`,
  getCategoriesApi: `${ENV.CRYPTO_BASE_URL}/coins/categories`,
  getCoinDetails: `${ENV.CRYPTO_BASE_URL}/coins`,
};

export const DATABASE = {
  USER: process.env.PG_USER,
  HOST: process.env.PG_HOST,
  DATABASE: process.env.PG_DATABASE,
  PASSWORD: process.env.PG_PASSWORD,
  PORT: process.env.PG_PORT,
};
