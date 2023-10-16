import {
  createOrderRepository,
  getAllOrderRepository,
  getOrderByUserRepository,
  updateOrderRepository,
} from "../repositories/ordersRepository";
export const createOrderServices = async (data) => {
  try {
    const response = await createOrderRepository(data);
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Order thành công" : "Order đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllOrderServices = async () => {
  try {
    const data = await getAllOrderRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOrderByUserServices = async ({ id }) => {
  try {
    const data = await getOrderByUserRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updateOrderServices = async (id, body) => {
  try {
    const response = await updateOrderRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
