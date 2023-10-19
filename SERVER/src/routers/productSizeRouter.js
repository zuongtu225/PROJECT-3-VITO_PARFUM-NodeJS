const express = require("express");
const productSizeRouter = express.Router();
const controllers = require("../controllers");

productSizeRouter.get("/", controllers.getAllProductSizeController);
productSizeRouter.post("/", controllers.createProductSizeController);
productSizeRouter.get("/:id", controllers.getOneProductSizeController);
productSizeRouter.put("/update", controllers.updateProductSizeController);
productSizeRouter.delete("/:id", controllers.deleteProductSizeController);

module.exports = productSizeRouter;
