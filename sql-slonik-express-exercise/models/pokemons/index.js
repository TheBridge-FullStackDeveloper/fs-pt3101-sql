const { sql } = require('slonik')

const selectAll = (db) => async () => {
    try {
        const response = await db.query(sql.unsafe`
            SELECT * FROM pokemons;
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
    selectAll,
}