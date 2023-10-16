import {
  createAddressRepository,
  deleteAddressRepository,
  getAllAddressRepository,
  getOneAddressRepository,
  updateAddressRepository,
} from "../repositories/addressRepository";
export const createAddressServices = async (id, data) => {
  try {
    const response = await createAddressRepository(id, data);
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Address thành công" : "Address đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllAddressServices = async () => {
  try {
    const data = await getAllAddressRepository();
    return data;
  } catch (error) {}
};
export const getAddressByUserServices = async ({ id }) => {
  try {
    const data = await getOneAddressRepository({ id });
    return data;
  } catch (error) {}
};
export const updateAddressServices = async (id, body) => {
  try {
    const response = await updateAddressRepository(id, body);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {}
};
export const deleteAddressServices = async ({ id }) => {
  try {
    const response = await deleteAddressRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {}
};
