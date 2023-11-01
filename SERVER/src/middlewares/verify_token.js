// XÁC THỰC NGƯỜI DÙNG = AUTHENTICATE

const jwt = require("jsonwebtoken");
require("dotenv").config();

// HÀM NÀY KIỂM TRA TOKEN ĐĂNG NHẬP CÓ ĐÚNG HAY KO
const checkAuthentication = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.sendStatus(401);
  }
  const token = tokenParts[1];
  // hàm verify để xác minh user có đúng chưa
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json("Token không hợp lệ");
    }
    req.user = user;
    next();
  });
};
module.exports = checkAuthentication;
