const { sql } = require("slonik");



//1. Haz un endpoint para obtener todos los pokemons (incluye los tipos también. Devuelve el id del pokémon, el nombre y los tipos que tiene en un array)
const selectAllpokemon = () => (sql.unsafe`SELECT
p.id,
p.name,
JSON_AGG(DISTINCT e.name ORDER BY e.name) AS types
FROM pokemons AS p
JOIN pokemons_elements AS pe ON p.id = pe.pokemon_id
JOIN elements AS e ON pe.element_id = e.id
GROUP BY p.id, p.name
ORDER BY
p.id ASC`)


const selectPokemonByType = (type) => (sql.unsafe`SELECT
      p.id,
      p.name,
      JSON_AGG(DISTINCT e.name ORDER BY e.name) AS types
    FROM
      pokemons AS p
      JOIN pokemons_elements AS pe ON p.id = pe.pokemon_id
      JOIN elements AS e ON pe.element_id = e.id
    WHERE
      e.name = ${type}
    GROUP BY
      p.id, p.name
    ORDER BY
      p.id ASC 
      
    

      
      

    
  `);




const selectAllpokemonName = (name)  => (sql.unsafe`SELECT p.id, p.name,
JSON_AGG(DISTINCT e.name ORDER BY e.name) AS types
FROM pokemons AS p
INNER JOIN pokemons_elements AS pe ON p.id = pe.pokemon_id
INNER JOIN elements AS e ON pe.element_id = e.id
WHERE p.name = ${name}
GROUP BY p.id, p.name
ORDER BY
p.id ASC`);


//Modifica el primer endpoint para que acepte query params de la siguiente manera




module.exports = {
    selectAllpokemon,
    selectPokemonByType,
    selectAllpokemonName,
}