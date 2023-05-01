const router = require("express").Router();

module.exports = (db) => {
    const getPokemon = require("./getPokemon");
    router.get("/", getPokemon(db));

    const getPokemonByOnlyType = require("./getPokemonByOnlyType");
    router.get("/type/:type", getPokemonByOnlyType(db));

    const addNewPokemon = require("./addNewPokemon");
    router.post("/new", addNewPokemon(db));

    const getPokemonInfo = require("./getPokemonInfo");
    router.get("/:name", getPokemonInfo(db));

    return router;
}