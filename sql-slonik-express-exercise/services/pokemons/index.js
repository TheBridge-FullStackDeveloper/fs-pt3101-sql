const router = require('express').Router()

module.exports = db => {
    router.get('/', require('./get-all')(db))
    router.get('/types', require('./get-types')(db))

    return router
}