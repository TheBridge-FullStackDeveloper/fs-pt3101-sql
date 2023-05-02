const { selectAll, selectTrainer } = require('./queries')



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

module.exports = {
    chooseAll,
    chooseLead,
}