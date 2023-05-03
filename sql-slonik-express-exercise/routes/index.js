const router = require('express').Router()
const trainers = require('./trainers')
const pokemons = require('./pokemons')
const cities = require('./cities')
const types = require ('./types')
module.exports = (db) =>  {
    router.use('/trainers', trainers(db)),
    router.use('/pokemons', pokemons(db) ),
    router.use('/cities', cities(db)),
    router.use('/types', types(db))
    return router
}

// 1 donde entra la peticion 