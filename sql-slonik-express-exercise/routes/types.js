const router=require("express").Router()

const {allTypes} = require("../controllers/trainers")

module.exports = (db) =>{
    router.get("/",allTypes(db))

    return router
}