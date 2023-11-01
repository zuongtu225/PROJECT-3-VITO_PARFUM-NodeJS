import { getOneCartbyUserRepository } from "../repositories/cartRepository";
import {
  createOrderItemRepository,
  getAllOrderItemRepository,
  getOrderItemByUserRepository,
} from "../repositories/orderItemsRepository";

export const createOrderItemServices = async (id, order) => {
  try {
    const listCartUser = await getOneCartbyUserRepository({ id });
    const newOrderItems = listCartUser.map((item) => ({
      orderId: order.orderId,
      quantity: item.quantity,
      productSizeId: item.productSizeId,
      userId: item.userId,
    }));
    await createOrderItemRepository(newOrderItems);
    return {
      success: true,
      message: "Tạo OrderItem thành công",
    };
  } catch (error) {
    return error;
  }
};

export const getAllOrderItemServices = async () => {
  try {
    const data = await getAllOrderItemRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOrderItemByUserServices = async ({ id }) => {
  try {
    const data = await getOrderItemByUserRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
