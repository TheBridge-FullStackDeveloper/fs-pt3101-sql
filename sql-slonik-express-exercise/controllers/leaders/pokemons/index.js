const router = require("express").Router();
const { authorizer } = require("../../middlewares");

module.exports = (db) => {
    const getAllPokemons = require("./getAllPokemons");
    router.get("/", getAllPokemons(db));

    const getPokemonByOnlyType = require("./getPokemonByOnlyType");
    router.get("/type/:type", authorizer, getPokemonByOnlyType(db));

    const addNewPokemon = require("./addNewPokemon");
    router.post("/new", authorizer, addNewPokemon(db));

    const getPokemonInfo = require("./getPokemonInfo");
    router.get("/:name", authorizer, getPokemonInfo(db));

    return router;
}
