const { sql } = require('slonik')

// 1.- Primer ejercicio y quinto ejercicio
const selectAll = (db) => async (elementId) => {
    try {

        const response = await db.query(sql.unsafe`
        SELECT pokemons.id, pokemons.name, array_agg(elements.name) AS types
        FROM pokemons
        JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id
        JOIN elements ON elements.id = pokemons_elements.element_id
        WHERE types = ${elementId}
        GROUP BY pokemons.id;
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