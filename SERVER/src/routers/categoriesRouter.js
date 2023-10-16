const express = require("express");
const categoryRouter = express.Router();
const controllers = require("../controllers");

categoryRouter.post("/create", controllers.createCategory);
categoryRouter.get("/", controllers.getAllCategories);
categoryRouter.get("/:id", controllers.getOneCategory);
categoryRouter.put("/:id", controllers.updateCategory);
categoryRouter.delete("/:id", controllers.deleteCategory);

module.exports = categoryRouter;
