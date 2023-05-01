const errors = require("../../misc/errors");
const { linkPokemonAndType } = require("../../models/types");

module.exports = (db) => async (req,res,next) => {
    const result = await linkPokemonAndType(await db)(req.params.name, req.body);

    if(!result.ok) return next(errors[500])

    res.status(200).json({
        success: true,
        data: result.data
    })
}