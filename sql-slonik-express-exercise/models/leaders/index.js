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

const postLead = (db) => async (name, badge, description, city) => {
    try {
        const resultNew = await db.query(postTrainer(name, badge, description, city))

        return {
            ok: true,
            response: resultNew.rows,
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