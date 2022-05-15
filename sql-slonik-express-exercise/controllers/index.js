const router = require("express").Router();

module.exports = (db) => {
   router.use("/pokemon", require("./pokemon")(db));
   router.use("/leaders", require("./leaders")(db));

   return router;
};