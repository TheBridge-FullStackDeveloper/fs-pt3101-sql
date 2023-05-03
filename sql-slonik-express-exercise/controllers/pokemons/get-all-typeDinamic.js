const pokemons = require("../../models/pokemons");


module.exports = (db) => async (req, res, next) => {
    const params = req.params.type;
    const dbRes = await pokemons.selectAllTypeDinamic(await db,params)()

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
};