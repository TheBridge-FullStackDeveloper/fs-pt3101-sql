const router = require("express").Router();

module.exports = (db) => {
    router.get("/", require("./get_all")(db));
    router.get("/city/:city", require("./get_by_city")(db));
    router.get("/name/:name", require("./get_by_name")(db));
    router.post("/new", require("./post")(db));
    router.put("/add/:trainerName/pokemons", require("./add_pokemons_to_trainer")(db));

    return router;
};