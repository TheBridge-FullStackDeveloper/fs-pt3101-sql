const router = require('express').Router()
const trainers = require('./trainers')
const pokemons = require('./pokemons')
const cities = require('./cities')
const type = require('./type')



module.exports = (db) => {
    router.use('/trainers', trainers(db))
    router.use('/pokemons',pokemons(db))
    router.use('/cities',cities(db))
    router.use('/type',type(db))

    return router
}


 
