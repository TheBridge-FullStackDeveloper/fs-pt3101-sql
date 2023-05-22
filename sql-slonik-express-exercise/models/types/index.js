const { selectAllTypes } = require('./queries');
// Ejercicio 4
const selectTypes = (db) => async () => {
    try{
        const response = await db.query( selectAllTypes() );

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
    selectTypes,
}