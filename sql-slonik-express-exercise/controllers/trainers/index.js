const router = require('express').Router();

module.exports = db =>{
    const getTrainers = require('./get-trainers')
    const getOneTrainer = require('./get-one-trainer')
    const createTrainer = require('./create-trainer')
    const updatePokemons =  require('./update-pokemons');


    router.post('/:trainersName/pokemons', updatePokemons(db))
    router.post('/new', createTrainer(db));
    router.get('/:trainername', getOneTrainer(db));
    router.get('/', getTrainers(db));

    return router
}