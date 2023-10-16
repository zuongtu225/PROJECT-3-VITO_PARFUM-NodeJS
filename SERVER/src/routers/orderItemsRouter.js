const express = require("express");
const orderItemRouter = express.Router();
const controllers = require("../controllers");
const checkAuthentication = require("../middlewares/verify_token");

orderItemRouter.get("/", controllers.getAllOrderItems);
orderItemRouter.post(
  "/create",
  [checkAuthentication],
  controllers.createOrderItem
);
orderItemRouter.get(
  "/detail",
  [checkAuthentication],
  controllers.getOrderItemByUserController
);

module.exports = orderItemRouter;
