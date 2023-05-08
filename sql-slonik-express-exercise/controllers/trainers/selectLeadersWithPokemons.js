const queries = require( '../../models/trainers' );

// Ejercicio 10
module.exports = (db) => async(req, res, next) => {
    
    const dbRes = await queries.linkPokemonAndTrainer( await db )(req.params.trainerName, req.body);

    if( !dbRes.ok) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });

}