const errors = require('../../errors')
const { selectTeam } = require('../../queries/trainers')

module.exports = db => async (req, res, next) => {
    const { leader } = req.params

    const queryResult = await selectTeam(db)(leader)

    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        data: queryResult.data,
    })
}