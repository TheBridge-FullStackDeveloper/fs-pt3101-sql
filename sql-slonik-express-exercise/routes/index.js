const router = require('express').Router()
const db = require('../configs/db')
const pokemons=require('./pokemons')
const leaders=require('./leaders')
const gyms = require('./gyms')
const elements = require('./elements')
const pokemonType = require('./pokemons')
const pokemonName=require('./pokemons')
const leaderName = require ('./leaders')

module.exports = (db) => {
    router.use('/pokemons', pokemons(db))
    router.use('/leaders', leaders(db))
    router.use('/gyms', gyms(db))
    router.use('/types', elements(db))
    router.use('/pokemons/type', pokemonType(db))
    router.use('pokemon/Onix', pokemonName(db))
    router.use('/leaders/', leaderName(db) )
    return router
}



