const router = require('express').Router()
const leaders = require('./leaders')





module.exports = (db) => {
     router.use('/leaders', leaders(db))

     return router
}