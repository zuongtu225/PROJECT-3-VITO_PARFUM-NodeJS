const express = require("express");
const addressRouter = express.Router();
const controllers = require("../controllers");
const checkAuthentication = require("../middlewares/verify_token");
addressRouter.get("/", controllers.getAllAddress);
addressRouter.get(
  "/detail",
  [checkAuthentication],
  controllers.getAddressByUser
);
addressRouter.post("/", [checkAuthentication], controllers.createAddress);
addressRouter.put("/:id", controllers.updateAddress);
addressRouter.delete("/:id", controllers.deleteAddress);

module.exports = addressRouter;
