const { sql } = require('slonik')

const whereTypes = (type1, type2) => {
    if(type1 && type2) return sql`
        WHERE e.name = ${type1}
        OR e.name = ${type2}   
    `

    return type1 ? sql`WHERE e.name = ${type1}` : sql``
}

// const havingLength = arr => {
//     if(arr.length) return sql`
//         HAVING COUNT(e.name) = ${arr.length}
//     `

//     return sql``
// }

const join = sql`
    INNER JOIN pokemons_elements AS pe
    ON p.id = pe.pokemon_id
    INNER JOIN elements AS e
    ON e.id = pe.element_id
`

const selectAllInfoFromPokemonsAndElements = (types) => sql`
    SELECT p.id, p.name, array_agg(e.name)::text[] AS type
    FROM pokemons AS p
    ${join}
    ${whereTypes(...types)}
    GROUP BY p.id, p.name
`

const selectAllTypes = sql`
    SELECT name FROM elements;
`

const selectAllWithJustOneType = sql`
    SELECT p.id, p.name, p.level, array_agg(e.name) AS type
    FROM pokemons AS p
    ${join}
    GROUP BY p.id, p.name
    HAVING COUNT(e.name) = 1;
`

const selectDetailsByName = pokemon => sql`
    SELECT p.id, p.name, array_agg(e.name)::text[] AS type
    FROM pokemons AS p
    ${join}
    WHERE p.name = ${pokemon}
    GROUP BY p.id, p.name
`

module.exports = {
    selectAllInfoFromPokemonsAndElements,
    selectAllTypes,
    selectAllWithJustOneType,
    selectDetailsByName,
}