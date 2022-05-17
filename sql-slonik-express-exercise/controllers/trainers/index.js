const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));
    router.get("/:city", require("./get_by_city")(db));

    return router;
};