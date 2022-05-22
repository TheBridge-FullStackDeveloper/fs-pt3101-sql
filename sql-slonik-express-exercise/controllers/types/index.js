const router = require('express').Router();

module.exports = db => {
    const getTypes = require('./get-types')

    router.get('/', getTypes(db))

    return router
}