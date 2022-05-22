const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));
    router.post("/new", require("./post")(db));

    return router;
};