const express = require("express");
const authRouter = express.Router();
const controllers = require("../controllers");

authRouter.post("/register", controllers.registerUser);
authRouter.post("/login", controllers.loginUser);

module.exports = authRouter;
