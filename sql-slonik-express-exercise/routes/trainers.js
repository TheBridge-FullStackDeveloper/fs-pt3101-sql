const router = require('express').Router();
const controllers = require('../controllers/trainers')


// Con esto voy teniendo la ruta /trainers/
module.exports = (db) => {
    router.get( '/', controllers.getAll(db) )

    return router;
}