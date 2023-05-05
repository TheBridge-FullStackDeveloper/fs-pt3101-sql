const router = require("express").Router()

const pokemons = require("./pokemons")
const trainers = require("./trainers")
const cities = require("./cities")
const types = require("./types")
const only = require("./one-type")
const onlyPokemon =require("./one-poke")

module.exports = (db) => {
    router.use("/pokemons", pokemons(db))
    router.use("/trainers", trainers(db))
    router.use("/cities", cities(db))
    router.use("/types", types(db))
    router.use("/pokemons/type/:type",only(db))
    router.use("/pokemons/:name", onlyPokemon(db))
    return router
}