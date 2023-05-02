const { sql } = require('slonik')

// 1.- Primer ejercicio y quinto ejercicio
const selectAll = (elementId) => sql.unsafe`
   
        SELECT pokemons.id, pokemons.name, array_agg(elements.name) AS type
        FROM pokemons
        JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
        JOIN elements ON elements.id = pokemons_elements.element_id
        WHERE elements.name = ${elementId}
        GROUP BY pokemons.id;
        `
// 6.- Sexto ejercicio

const selectType = (type) => sql.unsafe`
   
        SELECT pokemons.id, pokemons.name, array_agg(elements.name) AS type
        FROM pokemons
        JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
        JOIN elements ON elements.id = pokemons_elements.element_id
        WHERE elements.name = ${type}
        GROUP BY pokemons.id
        `  
        
// 7.- Séptimo ejercicio

const selectPokemon = (pokemon) => sql.unsafe`
   
        SELECT pokemons.id, pokemons.name, array_agg(elements.name) AS type
        FROM pokemons
        JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
        JOIN elements ON elements.id = pokemons_elements.element_id
        WHERE pokemons.name = ${pokemon}
        GROUP BY pokemons.id
        ` 

    
        
module.exports = {
    selectAll,
    selectType,
    selectPokemon,
    
}