const errors = require("../../misc/errors");
const { getPokemonByOnlyType } = require("../../models/pokemons");

module.exports = (db) => async (req, res, next) => {
	const result = await getPokemonByOnlyType(await db)(req.params.type);

	if(!result.ok) return next(errors[500]);

	res.status(200).json({
		success: true,
		data: result.data
	})
}