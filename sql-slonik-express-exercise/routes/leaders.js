const router = require('express').Router()
const controllers = require('../controllers/leaders')

module.exports = (db) => {
    router.get('/', controllers.getAll(db))
    router.get('/:id', controllers.getTrainer(db))

    return router
}