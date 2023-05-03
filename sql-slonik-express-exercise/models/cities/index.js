
const {selectAllCities} = require('./queries')
const {selectAllCitiesTotal} = require('./queries')



const selectAllTotal = (db) => async ()=>{
    try{
       const result = await db.query(selectAllCitiesTotal())

       return {
           ok: true,
           response: result.rows,

       }
    }catch(error){
       return {
           ok: false,
           message: error.message,
       }
    }
}

const selectAll = (db) => async (name)=>{
     try{
        const result = await db.query(selectAllCities(name))

        return {
            ok: true,
            response: result.rows,

        }
     }catch(error){
        return {
            ok: false,
            message: error.message,
        }
     }
}

module.exports = {
    selectAll,
    selectAllTotal,
}