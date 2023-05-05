const router=require("express").Router()

const {getAll} = require("../controllers/trainers")

module.exports = (db) =>{
    router.get("/",getAll(db))

    return router
}