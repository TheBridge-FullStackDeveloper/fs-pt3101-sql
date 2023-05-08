const { sql } = require('slonik');

// Ejercicio 2
const selectAllTrainers = () => sql.unsafe`
    SELECT leaders.name, leaders.badge, leaders.description, gyms.city  AS City_Gym
    FROM leaders
    INNER JOIN gyms ON leaders.id = gyms.leader_id
`

// Ejercicio 8
const selectOneByName = ( name ) => sql.unsafe`
    SELECT name, badge, description FROM leaders
    WHERE name ILIKE ${name}
`

// Ejercicio 9 PEndiente por pasar acá!!! Prosigo!!!
// const insertingThings = () => sql.unsafe``

module.exports = {
    selectAllTrainers,
    selectOneByName,
}