const { sql } = require('slonik');

const selectCities = (db) => async () => {
    try{
        const response = await db.query(sql.unsafe`
            SELECT leaders.name AS leader_name, leaders.badge AS leader_badge, string_agg(pokemons.name, ', ') AS pokemon_Name, gyms.city AS gym_training FROM leaders
            INNER JOIN gyms ON leaders.id = gyms.leader_id
            INNER JOIN pokemons ON leaders.id = pokemons.leader_id
            GROUP BY leaders.name, leader_badge, gyms.city
        `);

        return{
            ok       : true,
            response : response.rows
        }

    } catch ( error ){
        return {
            ok      : false,
            message : error.message
        }
    }
}

module.exports = {
    selectCities,
}