const router = require('express').Router()
const trainers = require('./trainers')

module.exports = (db) => {
    router.use('/trainers', trainers(db))

    return router
}


 
