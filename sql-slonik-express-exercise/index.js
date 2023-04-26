const express = require("express");
const app = express();

app.listen(process.env.PORT, () => console.info(`> Listening at ${process.env.PORT}`));