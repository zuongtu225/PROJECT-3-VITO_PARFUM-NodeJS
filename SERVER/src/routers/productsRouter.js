const express = require("express");
const productsRouter = express.Router();
const controllers = require("../controllers");

productsRouter.post("/", controllers.createProducts);
productsRouter.get("/", controllers.getAllProducts);
productsRouter.get("/:id", controllers.getOneProducts);
productsRouter.put("/:id", controllers.updateProducts);

module.exports = productsRouter;
