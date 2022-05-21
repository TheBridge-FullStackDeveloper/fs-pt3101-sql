const router = require('express').Router()

module.exports = db => {
    router.use('/pokemons', require('./pokemons')(db))

    return router
}