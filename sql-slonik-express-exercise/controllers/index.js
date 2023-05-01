const router = require("express").Router();

module.exports = (db) => {
    const trainersCtrl = require("./trainers");
    const pokemonCtrl = require("./pokemons");
    const typesCtrl = require("./types");

    router.use("/trainers", trainersCtrl(db));
    router.use("/pokemons", pokemonCtrl(db));
    router.use("/types", typesCtrl(db));
    router.use("/cities", require("./trainers/getTrainersAndPokemon")(db));

    return router;
}