const { sql } = require('slonik')

// 2.- Primer ejercicio
const selectLead = (db) => async () => {
    try {
        const response = await db.query(sql.unsafe`
        SELECT name, badge, description, city
        FROM leaders INNER JOIN gyms ON gyms.leader_id = leaders.id
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
    selectLead,
}