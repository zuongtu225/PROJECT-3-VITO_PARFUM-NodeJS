import {
  registerRepository,
  loginUserRepository,
} from "../repositories/authRepository";

export const registerServices = async (dataUser) => {
  try {
    const response = await registerRepository(dataUser);
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true ? "Đăng ký thành công" : "Người dùng đã tồn tại",
    };
  } catch (error) {
    return error;
  }
};
export const loginUserServices = async (dataUser) => {
  try {
    const response = await loginUserRepository(dataUser);
    return {
      success: response.token !== null ? true : false,
      accessToken:
        response.token !== null ? response.token : "Nhập sai mật khẩu",
      role: response.role,
      status: response.status,
    };
  } catch (error) {
    return error;
  }
};
