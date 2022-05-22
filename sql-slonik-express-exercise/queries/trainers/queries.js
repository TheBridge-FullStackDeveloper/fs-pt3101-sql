const { sql } = require('slonik')

const selectAllFromTrainersAndGyms = sql`
    SELECT name, badge, description, city
    FROM leaders AS t
    INNER JOIN gyms AS g
    ON t.id = g.leader_id;
`

module.exports = {
    selectAllFromTrainersAndGyms,
}