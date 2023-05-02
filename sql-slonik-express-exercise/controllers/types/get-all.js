const queries = require( '../../models/types' );

module.exports = ( db ) => async(req, res, next) => {
    const dbRes = await queries.selectTypes(await db)()

    if( !dbRes.ok ) return next({
        statusCode : 500,
        error      : new Error('¡Woops! ¡Algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });
}  