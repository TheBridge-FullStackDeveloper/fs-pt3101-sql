const queries = require('../../models/pokemons')

module.exports = (db) => async (req, res, next) => {
   
    const type = req.params.id

    const result = await queries.chooseType(await db)(type)

    if(!result.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        response: result.response
        
        
    })
    
}