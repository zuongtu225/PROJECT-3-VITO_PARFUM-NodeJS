import db from "../models";
// 2. import middlewares generateAccessToken
const bcrypt = require("bcrypt");
import { generateAccessToken } from "../middlewares/generateToken";

export const registerRepository = async (dataUser) => {
  const { firstName, lastName, password, status, avatar, email, role } =
    dataUser;
  const newPassword = await bcrypt.hash(password, 12);
  const response = await db.Users.findOrCreate({
    where: { email },
    defaults: {
      email,
      password: newPassword,
      avatar,
      firstName,
      lastName,
      roleId: role,
      status,
    },
  });
  return response;
};

export const loginUserRepository = async (dataUser) => {
  const { email, password } = dataUser;
  const user = await db.Users.findOne({
    where: { email: email },
  });
  const checkPassword = user && bcrypt.compareSync(password, user.password);
  const token = checkPassword
    ? generateAccessToken(
        user.id,
        user.firstName,
        user.lastName,
        user.email,
        user.roleId
      )
    : null;

  return { token, role: user.roleId };
};
