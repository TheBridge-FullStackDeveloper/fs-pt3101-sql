const router=require("express").Router()

const {onlyType} = require("../controllers/trainers")

module.exports = (db) =>{
    router.get("/",onlyType(db))

    return router
}