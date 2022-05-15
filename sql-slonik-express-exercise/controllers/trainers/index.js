const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));
    router.get("/cities", require("./get_cities")(db));

    return router;
};