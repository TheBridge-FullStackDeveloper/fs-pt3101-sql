const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));
    router.get("/type/:type", require("./get_by_type")(db));
    router.get("/name/:name", require("./get_by_name")(db));

    return router;
};