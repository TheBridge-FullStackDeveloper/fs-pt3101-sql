const router=require("express").Router()

const {getTrainers} = require("../controllers/trainers")

module.exports = (db) =>{
    router.get("/",getTrainers(db))

    return router
}