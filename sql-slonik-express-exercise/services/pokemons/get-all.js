const { selectAll } = require('../../queries/pokemons')
const errors = require('../../errors')

module.exports = db => async (_, res, next) => {
    const queryResult = await selectAll(db)()

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