const {selectCities } = require('./queries')
const selecCitiesRes = (db) => async () => {
    
    try {
        const response = await db.query(selectCities())
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
    selecCitiesRes,
}