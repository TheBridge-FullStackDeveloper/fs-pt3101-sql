const { sql } = require('slonik')

// 3.- tercer ejercicio
const selectCity = (db) => async () => {
    try {
        const response = await db.query(sql.unsafe`
        SELECT leaders.name, leaders.badge, pokemons.name AS pokemon, gyms.city
        FROM leaders
        JOIN pokemons ON pokemons.leader_id = leaders.id JOIN 
        gyms ON leaders.id = gyms.leader_id
        `)  

        return {
            ok: true,
            response: response.rows,
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

module.exports = {
    selectCity,
}