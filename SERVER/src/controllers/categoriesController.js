import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createCategory = async (req, res) => {
  try {
    const response = await services.createCategoryServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const response = await services.getAllCategoryServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneCategoryServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateCategoryServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteCategoryServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
