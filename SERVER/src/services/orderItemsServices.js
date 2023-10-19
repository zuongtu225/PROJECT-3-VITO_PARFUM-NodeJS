import { getOneCartbyUserRepository } from "../repositories/cartRepository";
import {
  createOrderItemRepository,
  getAllOrderItemRepository,
  getOrderItemByUserRepository,
} from "../repositories/orderItemsRepository";

export const createOrderItemServices = async ({ id }) => {
  try {
    const listCartUser = await getOneCartbyUserRepository({ id });
    const min = 100000000;
    const max = 999999999;
    const codeOrder = Math.floor(Math.random() * (max - min + 1)) + min;
    const createOrder = listCartUser.map((item) => ({
      codeOrder: codeOrder,
      quantity: item.quantity,
      productSizeId: item.productSizeId,
      userId: item.userId,
    }));
    const idCart = listCartUser.map((item) => item.id);
    const response = await createOrderItemRepository(createOrder, idCart);
    return {
      success: response[1] ? true : false,
      message: response[1]
        ? "Tạo OrderItem thành công"
        : "OrderItem đã tồn tại",
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
