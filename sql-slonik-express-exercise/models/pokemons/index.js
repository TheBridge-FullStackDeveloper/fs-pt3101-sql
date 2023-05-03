const {selectAllPokemons } = require('./queries')
const {selectAllParams} = require('./queries')
const {selectOneName} = require('./queries')
const selectAll = (db) => async () => {
    
    try {
        const response = await db.query(selectAllPokemons())
        return {
            ok: true,
            response: response.rows,
        }
        
    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
    }
}

const selectParams = (db) => async () => {
    try {
        const response = await db.query(selectAllParams())
        return {
            ok: true,
            response: response.rows,
        }
        
    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
    }

}
const selectName = (db) => async () => {
    try {
        const response = await db.query(selectOneName())
        return {
            ok: true,
            response: response.rows,
        }
    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
        
    }
}

module.exports={
    selectAll,
    selectParams,
    selectName,
}