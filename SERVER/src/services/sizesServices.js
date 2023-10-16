import {
  createSizeRepository,
  deleteSizeRepository,
  getAllSizeRepository,
  getOneSizeRepository,
  updateSizeRepository,
} from "../repositories/sizesRepository";
export const createSizeServices = async (data) => {
  try {
    const response = await createSizeRepository(data);
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Size thành công" : "Size đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllSizeServices = async () => {
  try {
    const data = await getAllSizeRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOneSizeServices = async ({ id }) => {
  try {
    const data = await getOneSizeRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updateSizeServices = async (id, body) => {
  try {
    const response = await updateSizeRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const deleteSizeServices = async ({ id }) => {
  try {
    const response = await deleteSizeRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
