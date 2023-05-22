const queries = require( '../../models/trainers' );


// Ejercicio 9
module.exports = ( db ) => async(req, res, next) => {

    const dbRes = await queries.addingNewTrainer(await db)( req.body )

    console.log('>>>> ', dbRes);

    if( !dbRes.ok) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.data,
    });

}