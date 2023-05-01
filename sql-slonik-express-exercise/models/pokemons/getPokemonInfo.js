const { sql } = require("slonik");

module.exports = (db) => async (name) => {
	try{
		const result = await db.query(sql.unsafe`
			SELECT pokemons.id, pokemons.name, JSON_AGG(elements.name) AS type FROM pokemons 
			INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
			INNER JOIN elements ON elements.id = pokemons_elements.element_id
			WHERE LOWER(pokemons.name) = ${name}
			GROUP BY pokemons.id
		`);

		return {
			ok: true,
			data: result.rows
		}
	} catch(error){
		console.log(error.message);

		return {
			ok: false
		}
	}
}