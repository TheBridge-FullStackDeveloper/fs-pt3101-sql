const { selectAll, selectTrainer, postTrainer, postCity } = require('./queries')
const { v4: uuidv4 } = require("uuid")



const chooseAll = (db) => async () => {
    try {
        const response = await db.query(selectAll())

        return {
            ok: true,
            response: response.rows,
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const chooseLead = (db) => async (trainer) => {
    try {
        const result = await db.query(selectTrainer(trainer))

        return {
            ok: true,
            response: result.rows,
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const postLead = (db) => async (info) => {
    
    try {
        const LeaderNewId = uuidv4();
        await db.query(postTrainer (LeaderNewId, info.name, info.badge, info.description))

        await db.query(postCity(info.city, LeaderNewId))

        return {
            ok: true,
        }
    } catch(error) {
        
        return {
            ok: false,
            message: error.message,
        }
    }
}

module.exports = {
    chooseAll,
    chooseLead,
    postLead,
}