const express = require("express");
const userRouter = express.Router();
const controllers = require("../controllers");
const uploadCloud = require("../middlewares/upload");
const checkAuthentication = require("../middlewares/verify_token");

userRouter.get("/", controllers.getAllUsers);
userRouter.get("/me", [checkAuthentication], controllers.getOneUser);

userRouter.put(
  "/update",
  [checkAuthentication],
  uploadCloud.single("avatar"),
  controllers.updateUser
);
userRouter.put("/:id", controllers.updateStatusUser); // admin edit

module.exports = userRouter;
