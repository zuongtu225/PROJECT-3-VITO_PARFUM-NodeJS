const express = require("express");
const ordersRouter = express.Router();
const controllers = require("../controllers");

ordersRouter.get("/", controllers.getAllOrderController);
ordersRouter.post("/create", controllers.createOrderController);
ordersRouter.get("/:id", controllers.getOrderByUserController);
ordersRouter.put("/:id", controllers.updateOrderController);

module.exports = ordersRouter;
