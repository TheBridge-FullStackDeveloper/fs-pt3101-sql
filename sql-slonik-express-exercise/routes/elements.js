const router = require('express').Router()
const {getTypes}= require('../controllers/elements')

module.exports = (db) => {
    router.get('/', getTypes(db) )
    return router
}