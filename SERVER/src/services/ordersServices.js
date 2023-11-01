import { getAllOrderItemRepository } from "../repositories/orderItemsRepository";
import {
  createOrderRepository,
  getAllOrderRepository,
  updateOrderRepository,
} from "../repositories/ordersRepository";

export const createOrderServices = async (id, data) => {
  try {
    const response = await createOrderRepository(id, data);
    return {
      success: true,
      data: response,
      message: "Tạo đơn thành công",
    };
  } catch (error) {
    console.log(error, "res");
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
export const updateOrderServices = async (id, body) => {
  try {
    const response = await updateOrderRepository(id, body);
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
