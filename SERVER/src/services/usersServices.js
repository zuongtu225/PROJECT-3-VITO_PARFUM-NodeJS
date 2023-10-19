import {
  getAllUserRepository,
  getOneUserRepository,
  updateStatusUserRepository,
  updateUserRepository,
} from "../repositories/userRepository";

export const getAllUserServices = async () => {
  try {
    const data = await getAllUserRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOneUserServices = async ({ id }) => {
  try {
    const data = await getOneUserRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updateUserServices = async (id, body) => {
  try {
    const response = await updateUserRepository(id, body);
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const updateStatusUserServices = async (id, body) => {
  try {
    const response = await updateStatusUserRepository(id, body);
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
