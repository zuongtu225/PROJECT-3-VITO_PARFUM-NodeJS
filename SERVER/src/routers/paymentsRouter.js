const express = require("express");
const paymentRouter = express.Router();
const controllers = require("../controllers");

paymentRouter.get("/", controllers.getAllPaymentsController);
paymentRouter.post("/", controllers.createPaymentController);
paymentRouter.get("/:id", controllers.getOnePaymentController);
paymentRouter.put("/:id", controllers.updatePaymentController);
paymentRouter.delete("/:id", controllers.deletePaymentController);

module.exports = paymentRouter;
