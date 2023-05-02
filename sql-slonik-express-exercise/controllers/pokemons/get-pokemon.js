const queries = require('../../models/pokemons')

module.exports = (db) => async (req, res, next) => {
   
    const pokemon = req.params.id
    
    const final = await queries.choosePokemon(await db)(pokemon)

    if(!final.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: final.response,
    })
    
}