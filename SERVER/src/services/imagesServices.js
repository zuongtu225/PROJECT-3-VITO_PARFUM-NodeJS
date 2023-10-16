import {
  createImageRepository,
  deleteImageRepository,
  getAllImageRepository,
  getOneImageRepository,
  updateImageRepository,
} from "../repositories/imagesRepository";
export const createImageService = async (data) => {
  try {
    let hasSuccess = false;
    for (const item of data) {
      try {
        const response = await createImageRepository(item.src, item.productId);
        const success = response[1] === true ? true : false;
        if (success) {
          hasSuccess = true;
        }
      } catch (error) {
        return error;
      }
    }
    if (hasSuccess === true) {
      return {
        success: true,
        message: "Thêm ảnh thành công",
      };
    } else {
      return {
        success: false,
        message: "Ảnh đã tồn tại",
      };
    }
  } catch (error) {
    return error;
  }
};

export const getAllImageService = async () => {
  try {
    const response = await getAllImageRepository();
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneImageService = async ({ id }) => {
  try {
    const response = await getOneImageRepository({ id });
    return response;
  } catch (error) {
    return error;
  }
};
export const updateImageService = async (id, src) => {
  try {
    const response = await updateImageRepository(id, src);
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Cập nhật sản phẩm thành công" : " Id không đúng",
    };
  } catch (error) {
    return error;
  }
};

export const deleteImageService = async ({ id }) => {
  try {
    const response = await deleteImageRepository({ id });
    return {
      success: response > 0 ? true : false,
      message: response > 0 ? "Xóa sản phẩm thành công" : " Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
