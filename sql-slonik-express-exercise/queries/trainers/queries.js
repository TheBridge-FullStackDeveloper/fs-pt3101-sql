const { sql } = require('slonik')

const whereLeader = leader => {
    if(leader) return sql`
        WHERE slug = ${leader}
    `

    return sql``
}

const selectAllFromLeadersAndGyms = leader => sql`
    SELECT name, badge, description, city
    FROM leaders AS t
    INNER JOIN gyms AS g
    ON t.id = g.leader_id
    ${whereLeader(leader)};
`

module.exports = {
    selectAllFromLeadersAndGyms,
}