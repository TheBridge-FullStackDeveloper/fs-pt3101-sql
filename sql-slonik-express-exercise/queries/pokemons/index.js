const { queryCatcher } = require('../../utils/commons')
const {
    selectAllInfoFromPokemonsAndElements
} = require('./queries')

const selectAll = db => async () => {
    return queryCatcher(
        db.query, 'pokemons, selectAll fn'
    )(selectAllInfoFromPokemonsAndElements)
}

module.exports = {
    selectAll,
}