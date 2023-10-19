import * as handleError from "../middlewares/handleError";
import * as services from "../services";

export const getAllUsers = async (req, res) => {
  try {
    const response = await services.getAllUserServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneUser = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOneUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.user;
    const avatar = req.file;
    const response = await services.updateUserServices(id, {
      ...req.body,
      avatar: avatar.path,
    });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error, "ec");
    return handleError.internalServerError(res);
  }
};
export const updateStatusUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateStatusUserServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
