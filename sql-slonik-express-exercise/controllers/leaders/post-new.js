const queries = require('../../models/leaders')

module.exports = (db) => async (req, res, next) => {

    const {name, badge, description, city} = req.body

    const resultTrainerNew = await queries.postLead(await db)(name, badge, description, city)

    if(!resultTrainerNew.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: resultTrainerNew.response,
    })
}



name, badge, description, city