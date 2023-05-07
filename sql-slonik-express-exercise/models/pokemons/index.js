const { selectAllPokemons } = require('./queries')
const { sql } = require('slonik')

// Por ejercicio 1
const selectAll = (db) => async () => {
    try{
        const response = await db.query( selectAllPokemons() );

        return{
            ok       : true,
            response : response.rows
        }
zz
    } catch ( error ){
        return {
            ok      : false,
            message : error.message
        }
    }
}

// Por ejercicio 5
const selectByTypes = (db) => async ( type1 = null, type2 = null ) => {
    
    try{
        console.log('>>>> ', type1, type2);
        
        const response = await db.query(sql.unsafe`

            SELECT pokemons.id, pokemons.name, JSON_AGG(elements.name) AS types
            FROM pokemons 
            INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
            INNER JOIN elements ON elements.id = pokemons_elements.element_id
            WHERE elements.name = ${type1} OR elements.name = ${type2}
            GROUP BY pokemons.id
            
        `);

        console.log( response );

        return{
            ok       : true,
            response : response.rows,
        }

    } catch( error ) {
        console.log('>>>>', error)
        return {
            ok      : false,
            message : error.message,
        }
    }

}

module.exports = {
    selectAll,
    selectByTypes,
}