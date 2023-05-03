const queries = require('../../models/pokemons');


module.exports = (db)=> async (req, res, next) => {
    

    const dbRes = await queries.selectNewPokemon(await db)(req.body)
     console.log(dbRes)
    

    if (!dbRes.ok) {
        return next({
            statusCode:500,
            error: new Error('something went wrong')
        });
      }

    res.status(200).json({
        success : true,
        data: dbRes.response,
    })
}