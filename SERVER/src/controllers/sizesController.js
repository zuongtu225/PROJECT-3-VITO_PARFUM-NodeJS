import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createSizeController = async (req, res) => {
  try {
    const response = await services.createSizeServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const getAllSizesController = async (req, res) => {
  try {
    const response = await services.getAllSizeServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneSizeController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneSizeServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateSizeController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateSizeServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteSizeController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteSizeServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
