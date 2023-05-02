const { sql } = require('slonik');


const selectAllTrainers = () => sql.unsafe`
    SELECT leaders.name, leaders.badge, leaders.description, gyms.city  AS City_Gym
    FROM leaders
    INNER JOIN gyms ON leaders.id = gyms.leader_id  
`

module.exports = {
    selectAllTrainers,
}