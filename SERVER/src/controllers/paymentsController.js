import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const createPaymentController = async (req, res) => {
  try {
    const response = await services.createPaymentServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const getAllPaymentsController = async (req, res) => {
  try {
    const response = await services.getAllPaymentServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOnePaymentController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOnePaymentServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updatePaymentController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updatePaymentServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deletePaymentController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deletePaymentServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
