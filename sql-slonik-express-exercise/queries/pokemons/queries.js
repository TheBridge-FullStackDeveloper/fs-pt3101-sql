const { sql } = require("slonik");

const selectAllPokemons = (pokemon) => sql.unsafe`
    SELECT DISTINCT
      pokemons.id AS "id", 
      pokemons.name AS "name", 
      array(
        SELECT elements.name
        FROM elements
        JOIN pokemons_elements 
          ON pokemons_elements.element_id = elements.id
        WHERE pokemons_elements.pokemon_id = pokemons.id
        ORDER BY elements.id
      ) AS "Types"
    FROM pokemons
    INNER JOIN pokemons_elements 
    ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements
    ON pokemons_elements.element_id = elements.id
`;

module.exports = {
  selectAllPokemons,
};
