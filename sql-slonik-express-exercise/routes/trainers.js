const router = require('express').Router()
const controllers = require('../controllers/trainers')

module.exports = (db) => {
    router.get('/', controllers.getAll(db)),
    router.get('/:trainers', controllers.getAllTrainersDinamic(db)),
    router.post('/new',controllers. postNewTrainers(db))
    return router
}
