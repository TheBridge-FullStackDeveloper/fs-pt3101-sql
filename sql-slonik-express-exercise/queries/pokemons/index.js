const { queryCatcher } = require('../../utils/commons')
const {
    selectAllInfoFromPokemonsAndElements,
    selectAllTypes,
} = require('./queries')

const selectAll = db => async () => {
    return queryCatcher(
        db.query, 'pokemons, selectAll fn'
    )(selectAllInfoFromPokemonsAndElements)
}

const selectTypes = db => async () => {
    return queryCatcher(
        db.query, 'pokemons, selectType fn'
    )(selectAllTypes)
}

module.exports = {
    selectAll,
    selectTypes,
}