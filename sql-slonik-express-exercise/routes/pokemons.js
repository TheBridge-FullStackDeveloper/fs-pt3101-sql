const router = require('express').Router()
const controllers = require('../controllers/pokemons')

module.exports = (db) => {

    router.get('/pokemons',controllers.getAllPokemons(db))

    return router
}