import { getCategoriesService } from "./service.js";

export const getCategories = async (req, res) => {
  try {
    const data = await getCategoriesService(req, res);

    return data;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
