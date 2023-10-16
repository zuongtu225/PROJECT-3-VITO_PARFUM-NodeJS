const users = require("../models/users");

class Middlewares {
  async checkUsers(req, res, next) {
    const { fullname, email } = req.body;
    if (!fullname && !email) {
      return res
        .status(504)
        .json({ message: "VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN" });
    }
    const user = await users.findOne({ where: { email: email } });
    console.log(user);
    if (user) {
      return res.status(504).json({ message: "EMAIL ĐÃ TỒN " });
    }
    next();
  }
}
module.exports = new Middlewares();
