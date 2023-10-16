import {
  getAllUserRepository,
  getOneUserRepository,
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
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
