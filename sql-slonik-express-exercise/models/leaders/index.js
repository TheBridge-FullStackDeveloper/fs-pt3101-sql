const { selectAllLeaders}= require('./queries')
const { selectOneName } = require('./queries')
const { addLeader } = require('./queries')
const selectAll = (db) => async () => {
    try {
        const response = await db.query(selectAllLeaders())
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




const addOneLeader = (db) => async (dbname,dbBadge,dbDes,dbCity) => {
    try {
        //console.log("---->", name)
        const response = await db.query(addLeader(dbname,dbBadge,dbDes,dbCity))
        return {
            ok: true,
            response: response.rows,
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: error.message
        }
        
    }
}

module.exports={
    selectAll,
    selectName,
    addOneLeader,
}