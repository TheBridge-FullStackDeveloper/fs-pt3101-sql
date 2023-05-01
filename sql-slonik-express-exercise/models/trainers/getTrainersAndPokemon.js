const { sql } = require("slonik");

module.exports = (db) => async () => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT leaders.name, leaders.badge, JSON_AGG(pokemons.name ORDER BY pokemons.level ASC, pokemons.id ASC) AS pokemons, gyms.city
            FROM pokemons INNER JOIN leaders ON pokemons.leader_id = leaders.id
            INNER JOIN gyms ON leaders.id = gyms.leader_id
            GROUP BY leaders.name, leaders.badge, gyms.city
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