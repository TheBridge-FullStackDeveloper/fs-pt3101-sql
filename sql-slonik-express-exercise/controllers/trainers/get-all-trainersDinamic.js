const trainersDinamic = require("../../models/trainers");


module.exports = (db) => async (req, res, next) => {
    const params = req.params.trainers
    const dbRes = await trainersDinamic.selectAllT(await db,params)()

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
};