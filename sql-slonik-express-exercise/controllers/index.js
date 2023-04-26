const router = require("express").Router();

module.exports = (db) => {
  const pokemonsControllers = require("./pokemons");
  const trainersControllers = require("./trainers");
  const gymsControllers = require("./gyms");
  const elementsControllers = require("./elements");

  router.use("/pokemons", userControllers(db));
  router.use("/triners", trainersControllers(db));
  router.use("/gyms", gymsControllers(db));
  router.use("/elements", elementsControllers(db));

  return router;
};
