// KIỂM TRA QUYỀN NGƯỜI DÙNG = AUTHORIZATION
const checkRole = (req, res, next) => {
  try {
    const roleNum = req.user.roleId;
    if (roleNum == 1) {
      // Nếu là Admin thì cho vào
      next();
    } else if (roleNum == 2) {
      // Nếu là User thì ko cho vào
      res.status(403).json("Forbidden");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = checkRole;
