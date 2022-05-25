const router = require('express').Router()

module.exports = db => {
    router.get('/', require('./get-all')(db))
    router.get('/:leader', require('./get-one-leader')(db))

    return router
}