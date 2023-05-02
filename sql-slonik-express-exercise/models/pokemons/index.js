const { selectAllPokemons } = require('./queries')

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

module.exports = {
    selectAll,
}