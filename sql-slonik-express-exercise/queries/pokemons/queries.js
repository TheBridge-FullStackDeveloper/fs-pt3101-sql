const { sql } = require('slonik')

const selectAllInfoFromPokemonsAndElements = sql`
    SELECT p.id, p.name, e.name AS type
    FROM pokemons AS p
    INNER JOIN pokemons_elements AS pe
    ON p.id = pe.pokemon_id
    INNER JOIN elements AS e
    ON e.id = pe.element_id;
`

const selectAllTypes = sql`
    SELECT name FROM elements;
`

module.exports = {
    selectAllInfoFromPokemonsAndElements,
    selectAllTypes,
}