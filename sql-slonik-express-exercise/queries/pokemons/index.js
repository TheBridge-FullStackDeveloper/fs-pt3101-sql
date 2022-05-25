const { queryCatcher } = require('../../utils/commons')
const {
    selectAllInfoFromPokemonsAndElements,
    selectAllTypes,
    selectAllWithJustOneType,
    selectDetailsByName,
} = require('./queries')

const selectAll = db => async (types, length) => {
    return queryCatcher(
        db.query, 'pokemons, selectAll fn'
    )(selectAllInfoFromPokemonsAndElements(types, length))
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

const selectOneByName = db => async pokemon => {
    return queryCatcher(
        db.maybeOne, 'pokemons, selectOneByName fn'
    )(selectDetailsByName(pokemon))
}

module.exports = {
    selectAll,
    selectTypes,
    selectByOneType,
    selectOneByName,
}