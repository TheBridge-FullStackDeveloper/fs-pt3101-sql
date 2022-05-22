const { selectAll } = require('../../queries/pokemons')
const errors = require('../../errors')

module.exports = db => async (req, res, next) => {
    const { type1, type2 } = req.query

    const queryResult = await selectAll(db)(type1, type2)

    if(!queryResult.ok) return next(errors[400])

    const result = queryResult.data.reduce((all, { id, name, type }) => {
        return {
            ...all,
            [name]: {
                id,
                name,
                types: [...(all[name]?.types || []), type]
            }
        }
    }, {})
    
    res.status(200).json({
        success: true,
        data: Object.values(result),
    })
}