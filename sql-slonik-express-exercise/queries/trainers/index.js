const { queryCatcher } = require('../../utils/commons')
const {
    selectAllFromLeadersAndGyms,
    insertLeader,
    insertGym,
} = require('./queries')

const selectAll = db => async (trainer) => {
    return queryCatcher(
        trainer ? db.maybeOne : db.query, 'leaders, selectAll fn'
    )(selectAllFromLeadersAndGyms(trainer))
}

const insertNewLeader = db => async (name, badge, description, city) => {
    await db.transaction(async tx => {
        await queryCatcher(
            tx.query, 'leaders, insertNewLeader'
        )(insertLeader(name, badge, description, city))

        // Pensar el proceso para obtener el id del entrenador creado y poder crear después la ciudad
    })
}

module.exports = {
    selectAll,
    insertNewLeader,
}