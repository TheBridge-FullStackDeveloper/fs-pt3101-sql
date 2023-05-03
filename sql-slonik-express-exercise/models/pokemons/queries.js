const { sql } = require('slonik')
const selectAllPokemons=() => sql.unsafe` 
SELECT p.id, p.name, e.name AS type_pokemon
FROM pokemons p
INNER JOIN pokemons_elements 
ON p.id= pokemons_elements.pokemon_id
INNER JOIN elements e
ON pokemons_elements.element_id = e.id


`
/*
SELECT p.id, p.name, ARRAY_AGG(e.name) AS type_pokemon
FROM pokemons p
INNER JOIN pokemons_elements 
ON p.id= pokemons_elements.pokemon_id
INNER JOIN elements e
ON pokemons_elements.element_id = e.id
GROUP BY p.id

*/
const selectAllParams=() => sql.unsafe`
SELECT p.id, p.name, e.name AS type_pokemon
FROM pokemons p
INNER JOIN pokemons_elements 
ON p.id= pokemons_elements.pokemon_id
INNER JOIN elements e
ON pokemons_elements.element_id = e.id

`
const selectOneName = () => sql.unsafe`
SELECT p.id, p.name,
JSON_AGG(DISTINCT e.name ORDER BY e.name) AS type_pokemon
FROM pokemons p
INNER JOIN pokemons_elements 
ON p.id= pokemons_elements.pokemon_id
INNER JOIN elements e
ON pokemons_elements.element_id = e.id
GROUP BY p.name, p.id

`
module.exports={
    selectAllPokemons,
    selectAllParams,
    selectOneName,
}