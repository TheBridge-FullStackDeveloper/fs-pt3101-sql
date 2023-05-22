const router      = require('express').Router();
const controllers = require('../controllers/pokemons')


// Con esto voy teniendo la ruta /pokemons/
module.exports = (db) => {
    // router.get( '/', controllers.getAll(db) ) Como lo habia puesto primero
    router.get( '/', controllers.getByType(db) )
    router.get( '/type/:type', controllers.getByTypeOnly(db) )
    router.get( '/:name', controllers.nameOnly(db) )
    router.post( '/new', controllers.newPokemon(db) )

    return router;
}