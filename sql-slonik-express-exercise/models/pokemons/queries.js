const { sql } = require('slonik');

const selectAllPokemons = () => (sql.unsafe`
    SELECT pokemons.id,pokemons.name,JSON_AGG(elements.name) AS types 
    FROM pokemons
    INNER JOIN pokemons_elements 
    ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements
    ON elements.id = pokemons_elements.element_id
    GROUP BY pokemons.id;
`);

const selectAllPokemonsTypes = () => (sql.unsafe`
    SELECT name
    FROM elements

`);

const selectAllPokemonsDinamic = (params) => (sql.unsafe`
    SELECT pokemons.id,pokemons.name,JSON_AGG(elements.name) AS types 
    FROM pokemons
    INNER JOIN pokemons_elements 
    ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements
    ON elements.id = pokemons_elements.element_id
    WHERE elements.name = ${params}
    GROUP BY pokemons.id;
`);

const selectAllPokemonsD = (params) => (sql.unsafe`
SELECT pokemons.id,pokemons.name,JSON_AGG(elements.name) AS types 
FROM pokemons
INNER JOIN pokemons_elements 
ON pokemons.id = pokemons_elements.pokemon_id
INNER JOIN elements
ON elements.id = pokemons_elements.element_id
WHERE pokemons.name = ${params}
GROUP BY pokemons.id;
`);

module.exports = {
    selectAllPokemons,
    selectAllPokemonsTypes,
    selectAllPokemonsDinamic,
    selectAllPokemonsD
}