const router = require('express').Router();
const controllers = require('../controllers/types')


// Con esto voy teniendo la ruta /types/
module.exports = (db) => {
    router.get( '/', controllers.getAll(db) )

    return router;
}