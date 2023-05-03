const cities = require("../../models/trainers");


module.exports = (db) => async (req, res, next) => {
    const dbRes = await cities.selectAllC(await db)()

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
};

