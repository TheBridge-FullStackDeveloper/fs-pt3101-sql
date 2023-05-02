const { sql } = require("slonik");
const pokeApiSearch = require("../../misc/pokeApiSearch");

//Ejercicios 7 y 12 (pokeApiSearch) -> /misc/pokeApiSearch
module.exports = (db) => async (name) => {
	try{
		const result = await db.query(sql.unsafe`
			SELECT pokemons.list_id, pokemons.name, JSON_AGG(elements.name) AS type FROM pokemons 
			INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
			INNER JOIN elements ON elements.id = pokemons_elements.element_id
			WHERE LOWER(pokemons.name) = ${name}
			GROUP BY pokemons.id
		`);

		if(result.rowCount === 0){
			const pokemon = await pokeApiSearch(name);

			if(!pokemon) return pokemon;
			
			pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
			
			await db.query(sql.unsafe`
				INSERT INTO pokemons(
					list_id, name, level
				) VALUES (
					${pokemon.id}, ${pokemon.name}, 50
				)
			`)

			return {
				ok: true,
				data: {
					id: pokemon.id,
					name: pokemon.name
				}
			}
		}

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