import { getAllOrderItemRepository } from "../repositories/orderItemsRepository";
import {
  createOrderRepository,
  getAllOrderRepository,
  updateOrderRepository,
} from "../repositories/ordersRepository";

export const createOrderServices = async (id, data) => {
  try {
    const orderItems = await getAllOrderItemRepository();
    const uniqueCodeOrders = [
      ...new Set(orderItems.map((item) => item.codeOrder)),
    ];
    for (const item of uniqueCodeOrders) {
      const createOrder = {
        codeOrder: item,
        addressId: +data.addressId,
        paymentId: +data.paymentId,
        userId: id,
        status: "Pending",
      };
      const response = await createOrderRepository(createOrder);
      return {
        success: response[1] === true ? true : false,
        data:
          response[1] === true ? "Tạo đơn thành công" : "Đơn hàng đã tồn tại",
      };
    }
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
