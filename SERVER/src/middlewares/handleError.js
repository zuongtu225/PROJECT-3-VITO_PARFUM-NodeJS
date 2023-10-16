import createError from "http-errors";

export const internalServerError = (res) => {
  const error = createError.InternalServerError();
  return res.status(error.status).json({
    error: true,
    message: error.message + " " + "Lỗi Máy chủ Nội bộ",
  });
};
