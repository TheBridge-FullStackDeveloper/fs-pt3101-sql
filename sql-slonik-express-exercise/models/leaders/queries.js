const { sql } = require('slonik')


// 2.- segundo ejercicio
const selectAll = () => sql.unsafe`

SELECT name, badge, description, city
FROM leaders INNER JOIN gyms ON gyms.leader_id = leaders.id
`

// 8.- Octavo ejercicio

const selectTrainer = (trainer) => sql.unsafe`
   
SELECT name, badge, description, city
FROM leaders INNER JOIN gyms ON gyms.leader_id = leaders.id
WHERE name = ${trainer}
`

module.exports = {
    selectAll,
    selectTrainer,    
}
