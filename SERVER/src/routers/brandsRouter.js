const express = require("express");
const brandRouter = express.Router();
const controllers = require("../controllers");

brandRouter.post("/", controllers.createBrand);
brandRouter.get("/", controllers.getAllBrands);
brandRouter.get("/:id", controllers.getOneBrand);
brandRouter.put("/:id", controllers.updateBrand);
brandRouter.delete("/:id", controllers.deleteBrand);

module.exports = brandRouter;
