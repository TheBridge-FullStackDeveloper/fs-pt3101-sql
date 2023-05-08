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

const postTrainer = (LeaderNewId, name, badge, description) => sql.unsafe`
  
INSERT INTO leaders
(id, name, badge, description)
VALUES (${LeaderNewId}, ${name}, ${badge}, ${description})
`

const postCity = (city, LeaderNewId) => sql.unsafe`
   
INSERT INTO gyms
(city, Leader_id)
VALUES (${city}, ${LeaderNewId})`

module.exports = {
    selectAll,
    selectTrainer,
    postTrainer,  
    postCity,  
}
