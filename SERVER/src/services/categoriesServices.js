import {
  createCategoryRepository,
  deleteCategoryRepository,
  getAllCategoryRepository,
  getOneCategoryRepository,
  updateCategoryRepository,
} from "../repositories/categoriesRepository";
export const createCategoryServices = async ({ title }) => {
  try {
    const response = await createCategoryRepository({ title });
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Category thành công" : "Category đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllCategoryServices = async () => {
  try {
    const data = await getAllCategoryRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOneCategoryServices = async ({ id }) => {
  try {
    const data = await getOneCategoryRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updateCategoryServices = async (id, body) => {
  try {
    const response = await updateCategoryRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const deleteCategoryServices = async ({ id }) => {
  try {
    const response = await deleteCategoryRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
