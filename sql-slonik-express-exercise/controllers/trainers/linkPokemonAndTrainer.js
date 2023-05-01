const errors = require("../../misc/errors");
const { linkPokemonAndTrainer } = require("../../models/trainers");

module.exports = (db) => async (req,res,next) => {
    const result = await linkPokemonAndTrainer(await db)(req.params.trainerName, req.body);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}