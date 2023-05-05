// Ejercicio 2
const { selectAllTrainers } = require('./queries');

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

module.exports = {
    selectTrainers,
}