import jwt from "jsonwebtoken";

// Hàm này để tạo 1 dãy string "token"
const generateAccessToken = (id, firstName, lastName, email, roleId) => {
  const user = jwt.sign(
    {
      id,
      firstName,
      lastName,
      email,
      roleId,
    },
    process.env.ACCESS_TOKEN_SECRET
  );
  return user; // trả về 1 token
};
module.exports = { generateAccessToken };
