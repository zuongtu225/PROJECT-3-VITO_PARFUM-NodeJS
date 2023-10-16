import {
  createPaymentRepository,
  deletePaymentRepository,
  getAllPaymentRepository,
  getOnePaymentRepository,
  updatePaymentRepository,
} from "../repositories/paymentsRepository";
export const createPaymentServices = async (data) => {
  try {
    const response = await createPaymentRepository(data);
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Payment thành công" : "Payment đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllPaymentServices = async () => {
  try {
    const data = await getAllPaymentRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOnePaymentServices = async ({ id }) => {
  try {
    const data = await getOnePaymentRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updatePaymentServices = async (id, body) => {
  try {
    const response = await updatePaymentRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const deletePaymentServices = async ({ id }) => {
  try {
    const response = await deletePaymentRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
