const { queryCatcher } = require('../../utils/commons')
const {
    selectAllInfoFromPokemonsAndElements,
    selectAllTypes,
    selectAllWithJustOneType,
} = require('./queries')

const selectAll = db => async (type1, type2) => {
    return queryCatcher(
        db.query, 'pokemons, selectAll fn'
    )(selectAllInfoFromPokemonsAndElements(type1, type2))
}

const selectTypes = db => async () => {
    return queryCatcher(
        db.query, 'pokemons, selectType fn'
    )(selectAllTypes)
}

const selectByOneType = db => async () => {
    return queryCatcher(
        db.query, 'pokemons, selectByOneType fn'
    )(selectAllWithJustOneType)
}

module.exports = {
    selectAll,
    selectTypes,
    selectByOneType,
}