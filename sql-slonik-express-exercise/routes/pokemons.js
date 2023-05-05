const router = require('express').Router();
const controllers = require('../controllers/pokemons')


// Con esto voy teniendo la ruta /pokemons/
module.exports = (db) => {
    router.get( '/', controllers.getAll(db) )
    router.get( '/', controllers.getPokemonByType(db) )

    return router;
}