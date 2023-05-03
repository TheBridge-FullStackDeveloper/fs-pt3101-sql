const { selectAllTrainers, selectAllTrainersDinamic, NewTrainers} = require('./queries')
const { selectAllCitiesTrainers } = require('./queries')

const selectAll = (db) => async () => {
    try {
        console.log("Hola")
        const response = await db.query(selectAllTrainers())


        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}



const selectAllC = (db) => async () => {
    try {
        console.log("Hola")
        const response = await db.query(selectAllCitiesTrainers())


        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectAllT = (db,params) => async () => {
    try {
       
        const response = await db.query(selectAllTrainersDinamic(params))


        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}

const AllNewTrainer = (db,params) => async () => {
    try {
       
        const response = await db.query(NewTrainers (params))


        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}


module.exports = {
    selectAll,
    selectAllC,
    selectAllT,
    AllNewTrainer,
}