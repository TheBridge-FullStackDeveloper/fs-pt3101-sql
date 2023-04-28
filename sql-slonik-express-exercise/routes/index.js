const router = require("express").Router();
const pokemons = require("./pokemons");
const controllers = require("../controllers/");

module.exports = (db) => {
  router.use("/pokemons", pokemons(db));

  return router;
};
