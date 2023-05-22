const queries = require( '../../models/pokemons' );
 
// Ejercicio 6
module.exports = ( db ) => async(req, res, next) => {

    // const type = req.params.type;

    const dbRes = await queries.selectByTypesOnly(await db)( req.params.type )
    
    // console.log('>>>> ', dbRes);

    if( !dbRes.ok) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });

}