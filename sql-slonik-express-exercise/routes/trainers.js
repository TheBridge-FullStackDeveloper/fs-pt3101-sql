const router = require('express').Router()
const controllers = require('../controllers/trainers')

module.exports = (db) => {
   router.get('/', controllers.getAllTotal(db));
   router.get('/:name', controllers.getAll(db));
  router.post('/new', controllers.getNewtrainer(db));
    return router
}