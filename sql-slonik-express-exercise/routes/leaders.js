const router= require('express').Router()
const { getAll } = require('../controllers/leaders')
const { getName } = require('../controllers/leaders')
const { postLeader } = require('../controllers/leaders')
module.exports = (db) => {
    router.get('/', getAll(db))
    router.get('/Lt.', getName(db) )
    router.post('/new', postLeader(db))
    return router
}
