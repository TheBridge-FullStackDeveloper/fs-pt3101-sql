const { sql } = require('slonik')
const { normalizer } = require('../../utils/commons')

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

const selectOne = (col, value) => sql`
    SELECT * FROM leaders
    WHERE ${sql.identifier([col])} = ${value}
`

const insertLeader = (name, badge, description) => sql`
    INSERT INTO leaders (
        name, badge, description, slug
    ) VALUES (
        ${name}, ${badge}, ${description}, ${normalizer(name)}
    );
`

const insertGym = (leaderId, city) => sql`
    INSERT INTO gyms (
        leader_id, city
    ) VALUES (
        ${leaderId}, ${city}
    );
`

module.exports = {
    selectAllFromLeadersAndGyms,
    insertLeader,
    insertGym,
    selectOne,
}