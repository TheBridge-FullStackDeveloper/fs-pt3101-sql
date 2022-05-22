const router = require('express').Router();

module.exports = db =>{
    const getTCities= require('./get-cities')

    router.get('/', getTCities(db))

    return router
}