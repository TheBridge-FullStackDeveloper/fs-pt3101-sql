const errors = require("../../misc/errors");
const { getPokemonInfo } = require("../../models/pokemons");

//Ejercicio 7
module.exports = (db) => async (req, res, next) => {
	const result = await getPokemonInfo(await db)(req.params.name);

	if(!result.ok) return next(errors[500]);

	res.status(200).json({
		success: true,
		data: result.data
	})
}

