const router = require('express').Router();


module.exports = db =>{
    const getAll = require('./get-all');
    const getType = require('./get-type');
    const getOnlyOne = require('./get-only-one');
    const newPokemon = require('./new-pokemon');

    router.post('/new', newPokemon(db))
    router.get('/getonlyone/:pokemonname', getOnlyOne(db))
    router.get('/type/:type', getType(db))
    router.get('/', getAll(db))

    return router;
}