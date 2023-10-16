import {
  createBrandRepository,
  deleteBrandRepository,
  getAllBrandRepository,
  getOneBrandRepository,
  updateBrandRepository,
} from "../repositories/brandsRepository";
export const createBrandServices = async ({ title }) => {
  try {
    const response = await createBrandRepository({ title });
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Brand thành công" : "Brand đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllBrandServices = async () => {
  try {
    const data = await getAllBrandRepository();
    return data;
  } catch (error) {}
};
export const getOneBrandServices = async ({ id }) => {
  try {
    const data = await getOneBrandRepository({ id });
    return data;
  } catch (error) {}
};
export const updateBrandServices = async (id, body) => {
  try {
    const response = await updateBrandRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {}
};
export const deleteBrandServices = async ({ id }) => {
  try {
    const response = await deleteBrandRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {}
};
