const { postPokemon } = require("../../queries/pokemons");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { id, name, level = 50 } = req.body;
    
    if (!id || !name) {
        return next(errors[400]);
    };

    const result = await postPokemon(db)(id, name, level);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        data: result.data,
    });
};