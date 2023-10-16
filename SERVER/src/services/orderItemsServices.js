import {
  createOrderItemRepository,
  deleteOrderItemRepository,
  getAllOrderItemRepository,
  getOrderItemByUserRepository,
  updateOrderItemRepository,
} from "../repositories/orderItemsRepository";
export const createOrderItemServices = async (data) => {
  try {
    const response = await createOrderItemRepository(data);
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
// export const updateOrderItemServices = async (id, role) => {
//   try {
//     const response = await updateOrderItemRepository(id, role);
//     return {
//       message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
//     };
//   } catch (error) {
//     return error;
//   }
// };
// export const deleteOrderItemServices = async ({ id }) => {
//   try {
//     const response = await deleteOrderItemRepository({ id });
//     return {
//       message: response > 0 ? "Xóa thành công" : "Id không đúng",
//     };
//   } catch (error) {
//     return error;
//   }
// };
