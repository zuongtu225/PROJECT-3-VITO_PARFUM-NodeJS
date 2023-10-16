import * as services from "../services";
import * as handleError from "../middlewares/handleError";

export const createRole = async (req, res) => {
  try {
    const response = await services.createRoleServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getAllRoles = async (req, res) => {
  try {
    const response = await services.getAllRoleServices();
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const getOneRole = async (req, res) => {
  const role = req.params.id;
  try {
    const response = await services.getOneRoleServices(role);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const updateRole = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.updateRoleServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
export const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.deleteRoleServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    return handleError.internalServerError(res);
  }
};
