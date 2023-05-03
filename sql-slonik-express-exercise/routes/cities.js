

const router = require('express').Router()
const controllers = require('../controllers/cities')

module.exports = (db) => {
  router.get('/', controllers.getAlltotal(db)),
  router.get('/:name', controllers.getAll(db))
  
    return router
}

// 2 paso por donde tiene que ir cada para cada midelware peticion que necesita el controlador