import {
  createCartRepository,
  deleteCartRepository,
  getOneCartbyUserRepository,
  getAllCartRepository,
  updateCartRepository,
} from "../repositories/cartRepository";
export const createCartServices = async (id, data) => {
  try {
    await createCartRepository(id, data);
    return {
      success: true,
      message: "Tạo Cart thành công",
    };
  } catch (error) {
    return error;
  }
};

export const getAllCartServices = async () => {
  try {
    const data = await getAllCartRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOneCartbyUserServices = async ({ id }) => {
  try {
    const data = await getOneCartbyUserRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updateCartServices = async (id, body) => {
  try {
    const response = await updateCartRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const deleteCartServices = async ({ id }) => {
  try {
    const response = await deleteCartRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
