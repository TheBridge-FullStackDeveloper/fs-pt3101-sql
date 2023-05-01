const errors = require("../../misc/errors");
const { addNewPokemon } = require("../../models/pokemons");

module.exports = (db) => async (req,res,next) => {
    const result = await addNewPokemon(await db)(req.body);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}