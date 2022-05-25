const errors = require('../../errors')
const { selectOneByName } = require('../../queries/pokemons')
const { capitalize } = require('../../utils/commons')

module.exports = db => async (req, res, next) => {
    const { pokemon } = req.params

    if(!pokemon) return next(errors[400])

    const queryResult = await selectOneByName(db)(capitalize(pokemon))

    if(!queryResult.ok) return next(errors[400])

    res.status(200).json({
        success: true,
        data: queryResult.data,
    })
}