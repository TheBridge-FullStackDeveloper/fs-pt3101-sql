const { sql } = require('slonik');

const selecAllPokemons = (pokemons) => (sql.unsafe`
SELECT pokemons.id, pokemons.name, JSON_AGG(elements.name) AS types
From pokemons
INNER JOIN pokemons_elements.pokemon.id
INNER JOIN elements
`)