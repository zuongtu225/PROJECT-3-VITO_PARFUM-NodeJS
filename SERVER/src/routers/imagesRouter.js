const express = require("express");
const imageRouter = express.Router();
const controllers = require("../controllers");
const uploadCloud = require("../middlewares/upload");

imageRouter.post(
  "/",
  uploadCloud.array("images", 5),
  controllers.createImageController
);
imageRouter.get("/", controllers.getAllImageController);
imageRouter.get("/:id", controllers.getOneImageController);
imageRouter.put(
  "/:id",
  uploadCloud.single("image"),
  controllers.updateImageController
);
imageRouter.delete("/", controllers.deleteImageController);

module.exports = imageRouter;
