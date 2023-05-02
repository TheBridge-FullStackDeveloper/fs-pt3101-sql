const queries = require('../../models/leaders')

module.exports = (db) => async (req, res, next) => {

    const trainer  = req.params.id

    const resultTrainer = await queries.chooseLead(await db)(trainer)

    if(!resultTrainer.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: resultTrainer.response,
    })
}