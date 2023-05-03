const router = require('express').Router()
const controllers = require('../controllers/pokemons')

module.exports = (db) => {

    router.get('/type',controllers.getAllTypes(db))
    router.get('/:type',controllers.getAllTypeDinamic(db))

    return router
}