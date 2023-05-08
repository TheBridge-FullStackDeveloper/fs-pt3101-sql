const { sql } = require('slonik');
const { v4: uuidv4 } = require('uuid');


// Ejercicio 2
const { selectAllTrainers } = require('./queries');
const {  selectOneByName  } = require('./queries');
// const {  insertingLeader  } = require('./queries');
// const {   insertingGyms   } = require('./queries');



const selectTrainers = (db) => async () => {
    try{
        const response = await db.query( selectAllTrainers() );

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

// Ejercicio 8
const selectTrainerByName = (db) => async ( name = null ) => {
    try{

        const response = await db.query( selectOneByName( name ) )

        //console.log( response );

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

// Ejercicio 9
const addingNewTrainer = (db) => async ( infoTrainer ) => {

    // console.log('MIRALO MIRALO===>>>>>', infoTrainer );

    try{

        const newTrainerId = uuidv4();

        await db.query( sql.unsafe`
            INSERT INTO leaders( id, name, badge, description )
            VALUES ( ${newTrainerId}, ${infoTrainer.name}, ${infoTrainer.badge}, ${infoTrainer.description} )
        ` );

        await db.query( sql.unsafe`
            INSERT INTO gyms ( city, leader_id )
            VALUES ( ${infoTrainer.city}, (SELECT id FROM leaders WHERE name LIKE ${infoTrainer.name}) )
        `
         );

        return {
            ok  : true,
        }


    } catch( error ){
        return{
            ok : false,
            message : error.message,
        }
    }

}

// Ejercicio 10
const linkPokemonAndTrainer = ( db ) => async ( trainer, pokemonsArray ) => {

    const pokArray = pokemonsArray.pokemons;

    console.log('===>>>> ', pokArray);
    console.log('===>>>> ', db);

    for ( let i=0 ; i < pokArray.length ; i++ ) {
        
        try{
            await db.query(sql.unsafe`
                UPDATE pokemons
                SET leader_id = ( SELECT id FROM leaders WHERE LOWER(name) = ${trainer} )
                WHERE name ILIKE ${pokArray[i]}               
            `)

        } catch( error ){     
            console.log( error.message );
            return {
                ok      : false,
            };
        }
    }

    return {
        ok : true,
        data: {
            trainer : trainer,
            pokemons : pokArray,
        }
    }
} 


module.exports = {
    selectTrainers,
    selectTrainerByName,
    addingNewTrainer,
    linkPokemonAndTrainer,
}