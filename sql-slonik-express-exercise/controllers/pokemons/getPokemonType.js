const queries = require( '../../models/pokemons' );

module.exports = ( db ) => async(req, res, next) => {

    const { type1, type2 } = req.query;

    const dbRes = await queries.selectAllByType(await db)( type1, type2 )

    if( !dbRes.ok ) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });
}  