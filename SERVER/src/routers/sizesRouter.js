const express = require("express");
const sizeRouter = express.Router();
const controllers = require("../controllers");

sizeRouter.get("/", controllers.getAllSizesController);
sizeRouter.post("/create", controllers.createSizeController);
sizeRouter.get("/:id", controllers.getOneSizeController);
sizeRouter.put("/:id", controllers.updateSizeController);
sizeRouter.delete("/:id", controllers.deleteSizeController);

module.exports = sizeRouter;
