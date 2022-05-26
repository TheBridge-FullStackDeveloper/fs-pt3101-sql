const { queryCatcher } = require('../../utils/commons')
const {
    selectAllFromLeadersAndGyms,
    insertLeader,
    insertGym,
    selectOne,
} = require('./queries')

const selectAll = db => async (trainer) => {
    return queryCatcher(
        trainer ? db.maybeOne : db.query, 'leaders, selectAll fn'
    )(selectAllFromLeadersAndGyms(trainer))
}

const insertNewLeader = db => async (name, badge, description, city) => {
    return await db.transaction(async tx => {
        await queryCatcher(
            tx.query, 'leaders, insertNewLeader fn1'
        )(insertLeader(name, badge, description, city))

        const { data: recentLeader } = await queryCatcher(
            tx.maybeOne, 'leaders, insertNewLeader fn2'
        )(selectOne('name', name))

        await queryCatcher(
            tx.query, 'leaders, insertNewLeader fn3'
        )(insertGym(recentLeader.id, city))

        return await selectAll(tx)(recentLeader.slug)
    })
}

module.exports = {
    selectAll,
    insertNewLeader,
}