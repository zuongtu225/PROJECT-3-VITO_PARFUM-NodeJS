const express = require("express");
const ordersRouter = express.Router();
const controllers = require("../controllers");
const checkAuthentication = require("../middlewares/verify_token");

ordersRouter.get("/", controllers.getAllOrderController);
ordersRouter.post(
  "/",
  [checkAuthentication],
  controllers.createOrderController
);
ordersRouter.put("/:id", controllers.updateOrderController);

module.exports = ordersRouter;
