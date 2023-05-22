const { sql } = require('slonik')

// Llamo a la funcion que está dentro de QUERIES
const { selectAllPokemons }     = require('./queries');
const { pokemonsByType }        = require('./queries');
const { typesOnly }             = require('./queries');
const { namesOnly }             = require('./queries');


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
        // console.log('>>>> ', type1, type2);
        
        const response = await db.query( pokemonsByType(type1, type2) );

        // console.log( response );

        return{
            ok       : true,
            response : response.rows,
        }

    } catch( error ) {
        // console.log('>>>>', error)
        return {
            ok      : false,
            message : error.message,
        }
    }

}

// Ejercicio 6
const selectByTypesOnly = (db) => async ( type = null ) => {
    try{

        const response = await db.query( typesOnly( type ) )

        console.log( response );

        return {
            ok       : true,
            response : response.rows
        }

    } catch( error ){
        return{
            ok      : false,
            message : error.message,
        }
    }
}

//Ejercicio 7
const selectByNameOnly = (db) => async ( name = null ) => {
    try{

        const response = await db.query( namesOnly( name ) )

        console.log( response );

        return {
            ok       : true,
            response : response.rows
        }

    } catch( error ){
        return{
            ok      : false,
            message : error.message,
        }
    }
}

// EJercicio 11
// Le agrego un ID de trainer random al pokemon ingresado xD
const insertNewPokemon = ( db ) => async (infoPokemon) => {

    try{


        await db.query(sql.unsafe`
            INSERT INTO pokemons ( name, level, id, leader_id )
            VALUES ( ${infoPokemon.name}, ${infoPokemon.level}, ${infoPokemon.id}, (
                SELECT id FROM leaders ORDER BY RANDOM() LIMIT 1 
            ))
        `)

        return {
            ok : true,
        }

    } catch( error ) {
        return {
            ok      : false,
            message : error.message,
        }
    }

}

module.exports = {
    selectAll,
    selectByTypes,
    selectByTypesOnly,
    selectByNameOnly,
    insertNewPokemon,
}