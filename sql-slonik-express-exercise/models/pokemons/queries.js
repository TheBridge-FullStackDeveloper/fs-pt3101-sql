const { sql } = require('slonik');

const selectAllPokemons = () => sql.unsafe`
    SELECT pokemons.id, pokemons.name AS Name_Poke, elements.name AS element_name
    FROM pokemons
    INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements ON elements.id = pokemons_elements.element_id;
`

module.exports = {
    selectAllPokemons,
}