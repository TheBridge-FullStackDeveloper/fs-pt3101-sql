const router = require("express").Router();

module.exports = (db) => {
    const getAllTrainers = require("./getAllTrainers");
    router.get("/", getAllTrainers(db));

    const getTrainerInfo = require("./getTrainerInfo")
    router.get("/:name", getTrainerInfo(db));

    const addNewTrainer = require("./addNewTrainer");
    router.post("/new", addNewTrainer(db));

    const linkPokemonAndTrainer = require("./linkPokemonAndTrainer");
    router.put("/:trainerName/pokemons", linkPokemonAndTrainer(db));

    return router;
}