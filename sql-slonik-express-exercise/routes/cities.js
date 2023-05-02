const router = require('express').Router();
const controllers = require('../controllers/cities')


// Con esto voy teniendo la ruta /cities/
module.exports = (db) => {
    router.get( '/', controllers.getAll(db) )

    return router;
}