const { queryCatcher } = require('../../utils/commons')
const { selectAllFromTrainersAndGyms } = require('./queries')

const selectAll = db => async () => {
    return queryCatcher(
        db.query, 'trainers, selectAll fn'
    )(selectAllFromTrainersAndGyms)
}

module.exports = {
    selectAll,
}