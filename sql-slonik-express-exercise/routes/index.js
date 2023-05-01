const router = require("express").Router();
const pokemons = require("./pokemons");
const trainers = require("./trainers");
const controllers = require("../controllers/");

module.exports = (db) => {
  router.use("/pokemons", pokemons(db));
  router.use("/triners", trainers(db));

  return router;
};
