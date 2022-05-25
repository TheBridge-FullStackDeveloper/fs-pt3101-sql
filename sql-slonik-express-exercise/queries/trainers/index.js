const { queryCatcher } = require('../../utils/commons')
const { selectAllFromLeadersAndGyms } = require('./queries')

const selectAll = db => async (trainer) => {
    return queryCatcher(
        trainer ? db.maybeOne : db.query, 'leaders, selectAll fn'
    )(selectAllFromLeadersAndGyms(trainer))
}

module.exports = {
    selectAll,
}