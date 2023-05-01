const { sql } = require("slonik");

module.exports = (db) => async (name) => {
	try{
		const result = await db.query(sql.unsafe`
            SELECT leaders.name, leaders.badge, leaders.description, JSON_AGG(JSON_BUILD_OBJECT('Name', pokemons.name, 'Level', pokemons.level)) AS pokemon
            FROM leaders INNER JOIN pokemons ON leaders.id = pokemons.leader_id
            WHERE LOWER(leaders.name) = ${name}
            GROUP BY leaders.name, leaders.badge, leaders.description
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