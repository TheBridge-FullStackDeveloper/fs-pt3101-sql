const errors = require("../../misc/errors");
const {getTrainersAndPokemon} = require("../../models/trainers");

//Ejercicio 3
module.exports = (db) => async (req,res,next) => {
    const result = await getTrainersAndPokemon(await db)();

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}