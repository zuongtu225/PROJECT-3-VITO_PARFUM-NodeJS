import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createCartController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.createCartServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const getAllCartController = async (req, res) => {
  try {
    const response = await services.getAllCartServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneCartbyUserController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOneCartbyUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateCartController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.updateCartServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteCartController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.deleteCartServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteItemCartController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteItemCartServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
