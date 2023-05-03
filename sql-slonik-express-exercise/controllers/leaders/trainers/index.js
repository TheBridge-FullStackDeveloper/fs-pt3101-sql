const router = require("express").Router();
const { authorizer } = require("../../middlewares");

module.exports = (db) => {
    const getAllTrainers = require("./getAllTrainers");
    router.get("/", getAllTrainers(db));

    const getTrainerInfo = require("./getTrainerInfo")
    router.get("/:name", authorizer, getTrainerInfo(db));

    const addNewTrainer = require("./addNewTrainer");
    router.post("/new", addNewTrainer(db));

    const linkPokemonAndTrainer = require("./linkPokemonAndTrainer");
    router.put("/:trainerName/pokemons", linkPokemonAndTrainer(db));

    return router;
}
