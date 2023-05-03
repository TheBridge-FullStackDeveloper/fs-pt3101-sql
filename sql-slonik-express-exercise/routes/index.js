const router = require("express").Router();

module.exports = (db) => {
    router.use("/auth", require("./auth")(db));

    router.use("/trainers", require("../controllers/trainers")(db));
    router.use("/pokemons", require("../controllers/pokemons")(db));
    router.use("/types", require("../controllers/types")(db));
    router.use("/cities", require("../controllers/trainers/getTrainersAndPokemon")(db));

    return router;
}