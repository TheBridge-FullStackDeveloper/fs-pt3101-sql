const router = require('express').Router()



const controllers = require('../controllers/pokemons')

module.exports = (db) => {

  
    router.get('/',controllers.getAll(db)),
    router.get('/type/:type', controllers.getPokemonByType(db)),
    router.get('/:name',controllers.getPokemonName(db))
   router.post('/new', controllers.getNewpokemon(db))
     
    return router
}