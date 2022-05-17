const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));

    return router;
};