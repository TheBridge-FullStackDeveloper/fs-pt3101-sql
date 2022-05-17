const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));
    router.get("/city/:city", require("./get_by_city")(db));
    router.get("/name/:name", require("./get_by_name")(db));

    return router;
};