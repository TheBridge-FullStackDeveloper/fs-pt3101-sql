const router = require('express').Router()
const controllers = require('../controllers/pokemons')

module.exports = (db) => {
    router.get('/', controllers.getAll(db))

    return router
}