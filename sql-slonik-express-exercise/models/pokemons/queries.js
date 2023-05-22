const { sql } = require('slonik');

const selectAllPokemons = () => sql.unsafe`
    SELECT pokemons.id, pokemons.name AS Name_Poke, elements.name AS element_name
    FROM pokemons
    INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements ON elements.id = pokemons_elements.element_id;
`;

const pokemonsByType = (type1=null, type2=null) => sql.unsafe`
    SELECT pokemons.id, pokemons.name, JSON_AGG(elements.name) AS types
    FROM pokemons 
    INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
    INNER JOIN elements ON elements.id = pokemons_elements.element_id
    WHERE elements.name = ${type1} OR elements.name = ${type2}
    GROUP BY pokemons.id
`;

 const typesOnly = ( type = null ) => sql.unsafe`
    SELECT pokemons.name AS Name_Poke, elements.name AS element_name
    FROM pokemons
    INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements ON elements.id = pokemons_elements.element_id
    WHERE elements.name ILIKE ${type}
`;

const namesOnly = ( name = null ) => sql.unsafe`  
    SELECT pokemons.id, pokemons.name AS Name_Poke, elements.name AS element_name
    FROM pokemons
    INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
    INNER JOIN elements ON elements.id = pokemons_elements.element_id
    WHERE pokemons.name ILIKE ${name}
` ;


module.exports = {
    selectAllPokemons,
    pokemonsByType,
    typesOnly,
    namesOnly,

}