const errors = require('../../errors')
const { selectOneByName } = require('../../queries/pokemons')

const upper = str => str.toUpperCase()
const lower = str => str.toLowerCase()
const concat = (str1, str2) => str1.concat(str2)
const join = arr => arr.join('')
const capitalize = ([first, ...rest]) => concat(upper(first), lower(join(rest)))

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