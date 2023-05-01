const { sql } = require("slonik");

module.exports = (db) => async () => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT name FROM elements
        `)

        return {
            ok: true,
            data: result.rows
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}