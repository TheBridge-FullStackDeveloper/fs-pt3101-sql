const { sql } = require("slonik");

module.exports = (db) => async () => {
    
    try {
        const result = await db.query(sql.unsafe`
            SELECT name, badge, description, city
            FROM leaders INNER JOIN gyms ON leaders.id = gyms.leader_id
        `)
        
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