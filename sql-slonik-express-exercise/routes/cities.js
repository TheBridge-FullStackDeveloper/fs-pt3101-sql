const router = require("express").Router();
const controllers = require("../controllers/trainers");

module.exports = (db) => {
  router.get("/", controllers.getCities(db));

  return router;
};
