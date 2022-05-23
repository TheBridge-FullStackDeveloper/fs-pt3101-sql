const { sql } = require('slonik')

const whereTypes = (type1, type2) => {
    if(type1 && type2) return sql`
        WHERE e.name = ${type1}
        OR e.name = ${type2}   
    `

    return type1 ? sql`WHERE e.name = ${type1}` : ''
}

const selectAllInfoFromPokemonsAndElements = (type1, type2) => sql`
    SELECT p.id, p.name, e.name AS type
    FROM pokemons AS p
    INNER JOIN pokemons_elements AS pe
    ON p.id = pe.pokemon_id
    INNER JOIN elements AS e
    ON e.id = pe.element_id
    ${whereTypes(type1, type2)}
`

const selectAllTypes = sql`
    SELECT name FROM elements;
`

const selectAllWithJustOneType = sql`
    SELECT p.id, p.name, p.level, array_agg(e.name) AS type
    FROM pokemons AS p
    INNER JOIN pokemons_elements AS pe
    ON p.id = pe.pokemon_id
    INNER JOIN elements AS e
    ON e.id = pe.element_id
    GROUP BY p.id, p.name
    HAVING COUNT(p.name) = 1;
`

module.exports = {
    selectAllInfoFromPokemonsAndElements,
    selectAllTypes,
    selectAllWithJustOneType,
}