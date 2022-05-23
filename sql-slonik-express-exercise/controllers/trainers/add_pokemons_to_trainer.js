const { addPokemons } = require("../../queries/trainers");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const trainerName = req.params.trainerName;
    const { pokemons } = req.body;
    
    if (!trainerName || !pokemons) {
        return next(errors[400]);
    };
    const result = await addPokemons(db)(pokemons, trainerName);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        message: `Pokémons añadidos a le entrenadore ${trainerName}`
    });
};