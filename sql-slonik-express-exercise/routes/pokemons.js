const router = require('express').Router()
const {getAll}= require('../controllers/pokemons')
const {getParams} = require('../controllers/pokemons')
const {getName} = require ('../controllers/pokemons')

module.exports = (db) => {
    router.get('/', getAll(db) )
    router.get('/type/fire', getParams(db))
    router.get('/Onix', getName(db))
    return router
}