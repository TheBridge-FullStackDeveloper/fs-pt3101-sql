const router = require('express').Router()
const controllers = require('../controllers/pokemons')

module.exports = (db) => {
    router.get('/:id', controllers.getAll(db))


    return router
}

