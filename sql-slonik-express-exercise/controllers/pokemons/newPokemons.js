const queries = require('../../models/pokemons');

// Ejercicio 11
module.exports = ( db ) => async( req, res, next ) => {

    let dbRest = await queries.insertNewPokemon( await db )( req.body );

    console.log( '=>>>>', dbRest );

    if( !dbRest.ok ) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!')
    });

    res.status( 200 ).json({
        success : true,
        data    : dbRest.Data,
    })


} 