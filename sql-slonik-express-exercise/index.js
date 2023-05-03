require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const db = require("./configs/db");
const errors = require("./misc/errors");

app.use(express.json());
app.use(cookieParser());

const main = require("./routes");

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


app.listen(process.env.PORT, () => console.info(`> Listening at ${process.env.PORT}`));