const express = require("express");
const { DEV_PORT } = require("./constants");
const db = require("./configs/db");
const app = express();

app.use(express.json());

const routes = require("./routes");

app.use(routes(db));

const main = require("./controllers");

app.use(main(db));

app.use((req, res, next) => {
  next({
    statusCode: 404,
    error: new Error("path not found"),
  });
});

app.use(({ statusCode, error }, req, res, next) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

app.listen(process.env.PORT || DEV_PORT, () => {
  console.info(`> listening at: ${process.env.PORT || DEV_PORT}`);
});
