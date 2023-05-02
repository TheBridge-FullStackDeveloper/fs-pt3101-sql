const router = require('express').Router()
const controllers = require('../controllers/pokemons')

module.exports = (db) => {
    router.get('/', controllers.getAll(db))
    router.get('/type/:id', controllers.getType(db))
    router.get('/:id', controllers.getPokemon(db))
    
    


    return router
}

