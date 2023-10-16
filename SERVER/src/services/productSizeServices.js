import {
  createProductSizeRepository,
  deleteProductSizeRepository,
  getAllProductSizeRepository,
  getOneProductSizeRepository,
} from "../repositories/productSizeRepository";
export const createProductSizeServices = async (data) => {
  try {
    for (const size of data.sizeId) {
      const productSize = {
        productId: data.productId,
        sizeId: size,
      };
      const response = await createProductSizeRepository(productSize);
      return {
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Tạo ProductSize thành công"
            : "ProductSize đã tồn tại ",
      };
    }
  } catch (error) {
    return error;
  }
};

export const getAllProductSizeServices = async () => {
  try {
    const data = await getAllProductSizeRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOneProductSizeServices = async ({ id }) => {
  try {
    const data = await getOneProductSizeRepository({ id });
    return data;
  } catch (error) {
    return error;
  }
};
export const updateProductSizeServices = async (data) => {
  await deleteProductSizeRepository(data);
  try {
    for (const size of data.sizeId) {
      const productSize = {
        productId: data.productId,
        sizeId: size,
      };
      await createProductSizeRepository(productSize);
    }
    return {
      success: true,
      message: "Cập nhật ProductSize thành công",
    };
  } catch (error) {
    return error;
  }
};
export const deleteProductSizeServices = async ({ id }) => {
  try {
    const response = await deleteProductSizeRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
