import {
  createRoleRepository,
  deleteRoleRepository,
  getAllRoleRepository,
  getOneRoleRepository,
  updateRoleRepository,
} from "../repositories/roleRepository";
export const createRoleServices = async ({ role }) => {
  try {
    const response = await createRoleRepository({ role });
    return {
      success: response[1] ? true : false,
      message: response[1] ? "Tạo Role thành công" : "Role đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};

export const getAllRoleServices = async () => {
  try {
    const data = await getAllRoleRepository();
    return data;
  } catch (error) {
    return error;
  }
};
export const getOneRoleServices = (id) => {
  try {
    const data = getOneRoleRepository(id);
    return data;
  } catch (error) {
    return error;
  }
};
export const updateRoleServices = async (id, role) => {
  try {
    const response = await updateRoleRepository(id, role);
    return {
      message: response > 0 ? "Cập nhật thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
export const deleteRoleServices = async ({ id }) => {
  try {
    const response = await deleteRoleRepository({ id });
    return {
      message: response > 0 ? "Xóa thành công" : "Id không đúng",
    };
  } catch (error) {
    return error;
  }
};
