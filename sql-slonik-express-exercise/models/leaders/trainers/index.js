const addNewTrainer = require("./addNewTrainer");
const getAllTrainers = require("./getAllTrainers");
const getTrainerInfo = require("./getTrainerInfo");
const getTrainersAndPokemon = require("./getTrainersAndPokemon");
const linkPokemonAndTrainer = require("./linkPokemonAndTrainer");

module.exports = (db) = {
    addNewTrainer,
    getAllTrainers,
    getTrainerInfo,
    getTrainersAndPokemon,
    linkPokemonAndTrainer
}