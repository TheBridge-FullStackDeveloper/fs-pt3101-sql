 const queries = require( '../../models/pokemons' );
 
// Ejercicio 1 y 5
module.exports = ( db ) => async(req, res, next) => {

    const type1 = req.query.type1;
    const type2 = req.query.type2;

    let dbRes;

    if( !type1 && !type2 ) {
        dbRes = await queries.selectAll(await db)()
    } else {
        dbRes = await queries.selectByTypes(await db)( type1, type2 )
    }

    
    if( !dbRes.ok ) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });
}