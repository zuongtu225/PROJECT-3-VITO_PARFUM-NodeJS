const express = require("express");
const orderItemRouter = express.Router();
const controllers = require("../controllers");
const checkAuthentication = require("../middlewares/verify_token");

orderItemRouter.get("/", controllers.getAllOrderItems);
orderItemRouter.post("/", [checkAuthentication], controllers.createOrderItem);
module.exports = orderItemRouter;
