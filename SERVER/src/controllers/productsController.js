import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createProducts = async (req, res) => {
  try {
    const response = await services.createProductsServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const response = await services.getAllProductsServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneProductsServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateProductsServices(id, {
      ...req.body,
    });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteProductsServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
