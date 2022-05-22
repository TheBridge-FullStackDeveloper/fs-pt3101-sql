const router = require('express').Router();

module.exports = (db) => {

    const pokemonsController = require('./pokemons');
    const trainersController = require('./trainers');
    const cityController = require('./cities')
    const typeController = require('./types')

    router.use("/pokemons", pokemonsController(db));
    router.use("/trainers", trainersController(db));
    router.use("/cities", cityController(db));
    router.use("/types", typeController(db));

    return router;
    
}