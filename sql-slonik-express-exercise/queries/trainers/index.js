const { queryCatcher } = require('../../utils/commons')
const {
    selectAllFromLeadersAndGyms,
    insertLeader,
    insertGym,
    selectOne,
    selectTeamByLeaderSlug,
} = require('./queries')

const selectAll = db => async (trainer) => {
    return await queryCatcher(
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

const selectTeam = db => async leader => {
    return await queryCatcher(
        db.maybeOne, 'leaders, selectTeam fn'
    )(selectTeamByLeaderSlug(leader))
}

module.exports = {
    selectAll,
    insertNewLeader,
    selectTeam,
}