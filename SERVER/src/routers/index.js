const roleRouter = require("./rolesRouter");
const addressRouter = require("./addressRouter");
const usersRouter = require("./usersRouter");
const authRouter = require("./authRouter");
const productsRouter = require("./productsRouter");
const brandsRouter = require("./brandsRouter");
const categoryRouter = require("./categoriesRouter");
const imagesRouter = require("./imagesRouter");
const sizesRouter = require("./sizesRouter");
const productSizesRouter = require("./productSizeRouter");
const cartsRouter = require("./cartsRouter");
const orderItemRouter = require("./orderItemsRouter");
const ordersRouter = require("./ordersRouter");
const paymentsRouter = require("./paymentsRouter");

function route(app) {
  app.use("/roles", roleRouter);
  app.use("/address", addressRouter);
  app.use("/users", usersRouter);
  app.use("/auth", authRouter);
  app.use("/brands", brandsRouter);
  app.use("/categories", categoryRouter);
  app.use("/products", productsRouter);
  app.use("/images", imagesRouter);
  app.use("/sizes", sizesRouter);
  app.use("/carts", cartsRouter);
  app.use("/productSizes", productSizesRouter);
  app.use("/orderItems", orderItemRouter);
  app.use("/orders", ordersRouter);
  app.use("/payments", paymentsRouter);
}
module.exports = route;
