const errors = require("../../misc/errors");
const { getAllPokemons, getPokemonByType } = require("../../models/pokemons");

//Ejercicio 1 (getAllPokemons) y Ejercicio 5 (getPokemonByType)
module.exports = (db) => async (req, res, next) => {
    const { type1, type2 } = req.query;

    let result;

    if(!type1 && !type2) {
        result = await getAllPokemons(await db)();
    } else {
        result = await getPokemonByType(await db)(type1, type2);
    }

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}