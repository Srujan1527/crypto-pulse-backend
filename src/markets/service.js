import { API_ROUTES, API_OPTIONS } from "../config/env.js";

export const getCategoriesService = async (req, res) => {
  try {
    console.log("Service");
    console.log(API_ROUTES.categoriesApi);

    const response = await fetch(`${API_ROUTES.categoriesApi}`, API_OPTIONS);
    if (!response.ok) {
      throw new Error("Error fetching categories");
    }
    // console.log(response);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.log(API_ROUTES.categoriesApi);
    return res
      .status(500)
      .json({ error: error.message, api: API_OPTIONS.categoriesApi });
  }
};
