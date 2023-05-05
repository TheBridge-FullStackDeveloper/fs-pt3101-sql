const { selectAllPokemons, selectAllByType } = require('./queries')

const selectAll = (db) => async () => {
    try{
        const response = await db.query( selectAllPokemons() );

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

const selectByTypes = (db) => async ( type1 = null, type2 = null ) => {
    try{

        const response = await db.query(sql.unsafe`
            SELECT pokemons.list_id, pokemons.name, JSON_AGG(elements.name) AS types
            FROM pokemons 
            INNER JOIN pokemons_elements ON pokemons.id = pokemons_elements.pokemon_id 
            INNER JOIN elements ON elements.id = pokemons_elements.element_id
            WHERE elements.name = ${type1} OR elements.name = ${type2}
            GROUP BY pokemons.id        
        ` );

        return {
             ok : true,
             response: response.rows,
        }

    } catch( error ) {
        return {
            ok : false,
            message : error.message,
        }
    }
}



module.exports = {
    selectAll,
    selectByTypes,
}