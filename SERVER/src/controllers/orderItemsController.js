import * as services from "../services";
import * as handleError from "../middlewares/handleError";

export const createOrderItem = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.createOrderItemServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getAllOrderItems = async (req, res) => {
  try {
    const response = await services.getAllOrderItemServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
