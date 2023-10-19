import * as services from "../services";
import * as handleError from "../middlewares/handleError";

export const createOrderController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.createOrderServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getAllOrderController = async (req, res) => {
  try {
    const response = await services.getAllOrderServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOrderByUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOrderByUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateOrderController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateOrderServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
