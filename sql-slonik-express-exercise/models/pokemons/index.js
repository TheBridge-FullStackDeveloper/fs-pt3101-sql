const addNewPokemon = require("./addNewPokemon");
const getAllPokemons = require("./getAllPokemons");
const getPokemonByType = require("./getPokemonByType");
const getPokemonByOnlyType = require("./getPokemonByOnlyType");
const getPokemonInfo = require("./getPokemonInfo");

module.exports = (db) = {
    addNewPokemon,
    getAllPokemons,
    getPokemonByType,
    getPokemonByOnlyType,
    getPokemonInfo
}