import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createProductSizeController = async (req, res) => {
  try {
    const response = await services.createProductSizeServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const getAllProductSizeController = async (req, res) => {
  try {
    const response = await services.getAllProductSizeServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneProductSizeController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneProductSizeServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateProductSizeController = async (req, res) => {
  try {
    const response = await services.updateProductSizeServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteProductSizeController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteProductSizeServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
