const { sql } = require("slonik")


const selectAllTrainersTodos = () => (sql.unsafe`
SELECT leaders.name, leaders.badge, leaders.description, gyms.city
FROM leaders
INNER JOIN gyms ON leaders.id = gyms.leader_id`);



const selectAllTrainers = (name) => (sql.unsafe`
SELECT leaders.name, leaders.badge, leaders.description, gyms.city
FROM leaders
INNER JOIN gyms ON leaders.id = gyms.leader_id WHERE leaders.name LIKE ${name}`);





module.exports = {
    selectAllTrainersTodos,
    selectAllTrainers,
   
}

