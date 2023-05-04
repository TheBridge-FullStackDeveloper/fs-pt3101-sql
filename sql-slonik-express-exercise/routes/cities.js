const router=require("express").Router()

const {getCities} = require("../controllers/trainers")

module.exports = (db) =>{
    router.get("/",getCities(db))

    return router
}