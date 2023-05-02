const router = require('express').Router()
const pokemons = require('./pokemons')
const leaders = require('./leaders')
const cities = require('./cities')
const types = require('./types')
const authRoutes = require('./auth')

module.exports = (db) => {
    router.use('/pokemons', pokemons(db))
    router.use('/leaders', leaders(db))
    router.use('/cities', cities(db))
    router.use('/types', types(db))
    router.use('/auth', authRoutes(db))

    return router
}