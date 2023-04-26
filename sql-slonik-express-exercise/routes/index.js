const router = require('express').Router()
const pokemons = require('./pokemons')

module.exports = (db) => {
    router.use('/pokemons', pokemons(db))

    return router
}