const router = require("express").Router();

module.exports = (db) => {
  const pokemonsControllers = require("./pokemons");
  const trainersControllers = require("./trainers");
  const citiesControllers = require("./trainers");
  const gymsControllers = require("./gyms");
  const elementsControllers = require("./elements");

  router.use("/pokemons", pokemonsControllers.getAll(db));
  router.use("/trainers", trainersControllers.getAll(db));
  router.use("/cities", citiesControllers.getCities(db));
  // router.use("/gyms", gymsControllers(db));
  // router.use("/elements", elementsControllers(db));

  return router;
};
