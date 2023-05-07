const { sql } = require('slonik')

// Ejercicio 2
const { selectAllTrainers } = require('./queries');
const { selectOneByName } = require('./queries');



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

module.exports = {
    selectTrainers,
    selectTrainerByName,
}