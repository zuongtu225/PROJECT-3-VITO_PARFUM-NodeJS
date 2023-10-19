import {
  createProductRepository,
  deleteProductRepository,
  getAllProductRepository,
  getOneProductRepository,
  updateProductRepository,
} from "../repositories/productsRepository";

export const createProductsServices = async (product) => {
  try {
    const response = await createProductRepository(product);
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo sản phẩm thành công" : "Sản phẩm đã tồn tại",
      data: response,
    };
  } catch (error) {
    return error;
  }
};
export const getAllProductsServices = async () => {
  try {
    const response = await getAllProductRepository();
    return response;
  } catch (error) {
    return error;
  }
};
export const getOneProductsServices = async ({ id }) => {
  try {
    const response = await getOneProductRepository({ id });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateProductsServices = async (id, body) => {
  try {
    const response = await updateProductRepository(id, body);
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Cập nhật sản phẩm thành công" : " Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const deleteProductsServices = async ({ id }) => {
  try {
    const response = await deleteProductRepository({ id });
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Xóa sản phẩm thành công" : " Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
