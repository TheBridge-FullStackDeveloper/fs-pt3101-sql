const { sql } = require("slonik");

module.exports = (db) => async (type1 = null, type2 = null) => {
	try{
		const result = await db.query(sql.unsafe`
			SELECT pokemons.id, pokemons.name, JSON_AGG(elements.name) AS types
			FROM pokemons 
			INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
			INNER JOIN elements ON elements.id = pokemons_elements.element_id
			WHERE elements.name = ${type1} OR elements.name = ${type2}
			GROUP BY pokemons.id
		`);

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