const { sql } = require('slonik')

// 4.- Cuarto ejercicio
const selectType = (db) => async () => {
    try {
        const response = await db.query(sql.unsafe`
        SELECT name FROM elements;
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
    selectType,
}