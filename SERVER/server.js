const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.APP_PORT || 6000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
const route = require("./src/routers/index");
route(app);

app.listen(port, () => {
  console.log(`Server Locallhost: http://localhost:${port}/`);
});
