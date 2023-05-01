const router = require('express').Router()
const controllers = require('../controllers/trainers')

module.exports = (db) => {

    router.get('/cities',controllers.getAllCities(db))

    return router
}