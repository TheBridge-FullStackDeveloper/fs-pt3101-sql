const { sql } = require('slonik');

// Ejercicio 1
const selectAllPokemons = () => sql.unsafe`
    SELECT pokemons.id, pokemons.name AS Name_Poke, elements.name AS element_name
    FROM pokemons
    INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements ON elements.id = pokemons_elements.element_id;
`

// Ejercicio 5
// const selectAllByType = () => sql.unsafe`
//     SELECT pokemons.list_id, pokemons.name, JSON_AGG(elements.name) AS types
//     FROM pokemons 
//     INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
//     INNER JOIN elements ON elements.id = pokemons_elements.element_id
//     WHERE elements.name = ${type1} OR elements.name = ${type2}
//     GROUP BY pokemons.id

// `


module.exports = {
    selectAllPokemons,
    // selectAllByType
}