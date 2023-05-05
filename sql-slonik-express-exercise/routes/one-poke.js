const router=require("express").Router()

const {onePokemon} = require("../controllers/trainers")

module.exports = (db) =>{
    router.get("/",onePokemon(db))

    return router
}