const router = require("express").Router();

module.exports = () => {
    router.use("/trainers");

    return router;
}