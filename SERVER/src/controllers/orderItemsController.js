import * as services from "../services";
import * as handleError from "../middlewares/handleError";

export const createOrderItem = async (req, res) => {
  try {
    const response = await services.createOrderItemServices(req.body);
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
export const getOrderItemByUserController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOrderItemByUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
// export const updateOrderItem = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const response = await services.updateOrderItemServices(id, req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     return handleError.internalServerError(res);
//   }
// };
// export const deleteOrderItem = async (req, res) => {
//   const { id } = req.user;
//   try {
//     const response = await services.deleteOrderItemServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     return handleError.internalServerError(res);
//   }
// };
