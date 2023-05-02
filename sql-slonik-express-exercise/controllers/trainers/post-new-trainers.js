const newTrainers = require("../../models/trainers");


module.exports = (db) => async (req, res, next) => {
    const body = req.body
    const dbRes = await newTrainers.AllNewTrainer (await db,body)()

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
};