const router = require('express').Router()
const {getCities} = require('../controllers/gyms')

module.exports = (db) => {
    router.get('/', getCities(db))
    return router

}
