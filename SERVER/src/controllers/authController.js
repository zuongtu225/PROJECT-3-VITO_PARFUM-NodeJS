import * as services from "../services";
import * as handleError from "../middlewares/handleError";

export const registerUser = async (req, res) => {
  try {
    const response = await services.registerServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const loginUser = async (req, res) => {
  try {
    const response = await services.loginUserServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
