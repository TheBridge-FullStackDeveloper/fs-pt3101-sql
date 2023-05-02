const { sql } = require("slonik");

//Ejercicio 1
module.exports = (db) => async () => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT pokemons.list_id, pokemons.name, JSON_AGG(elements.name) AS types
            FROM pokemons INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
            INNER JOIN elements ON elements.id = pokemons_elements.element_id
			GROUP BY pokemons.id
        `);
		
        return {
            ok: true,
            data: result.rows
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false,
        }
    }
}