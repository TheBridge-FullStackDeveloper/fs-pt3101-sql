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

// 9.- Noveno ejercicio

const postTrainer = (name, badge, description, city) => sql.unsafe`
   
INSERT INTO leaders
(name, badge, description, city)
VALUES (${name}, ${badge}, ${description}, ${city})
`

module.exports = {
    selectAll,
    selectTrainer,
    postTrainer,    
}
