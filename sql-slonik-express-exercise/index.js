const DEV_PORT = 4000;
const express = require("express");
const app = express();
const db = require("./configs/db");
const errors = require("./misc/errors");

app.use(express.json());

const main = require("./controllers")

app.use(main(db));

app.use((req,res,next) => {
  next(errors[400]);
})

app.use(({statusCode, error}, req, res, next) => {
    res.status(statusCode).json({
      success: false,
      message: error.message
    })
});


app.listen(DEV_PORT, () => console.info(`> Listening at ${DEV_PORT}`));