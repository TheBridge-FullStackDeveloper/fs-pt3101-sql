const { sql } = require('slonik')
const selectAllLeaders=() => sql.unsafe` 
SELECT l.name, l.badge, l.description, g.city
FROM leaders l
INNER JOIN gyms g
ON l.id=g.leader_id
`
const selectOneName = () => sql.unsafe`
SELECT *
FROM leaders
`

const addLeader = (dbname,dbBadge,dbDes,dbCity) => {
   const querys = `INSERT INTO leaders (
        name, badge, description
      ) VALUES (
        '${dbname}', '${dbBadge}', '${dbDes}'
      );`
    console.log(querys)
    return sql.unsafe`${querys}`
}
module.exports={
    selectAllLeaders,
    selectOneName,
    addLeader,
}