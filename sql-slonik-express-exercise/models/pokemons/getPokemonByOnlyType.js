const { sql } = require("slonik");

module.exports = (db) => async (type) => {
	try{
		const result = await db.query(sql.unsafe`
			SELECT pokemons.id, pokemons.name FROM pokemons 
			INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
			INNER JOIN elements ON elements.id = pokemons_elements.element_id
			WHERE elements.name = ${type}
			
			INTERSECT
			
			SELECT pokemons.id, pokemons.name FROM pokemons 
			INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
			INNER JOIN elements ON elements.id = pokemons_elements.element_id
			GROUP BY pokemons.id
			HAVING COUNT(elements.name) = 1
		`)

		return {
			ok: true,
			data: result.rows
		}
	} catch(error){
		console.log(error.message);

		return {
			ok: false,
		}
	}
}