const { sql } = require("slonik");

const selectAllTrainers = (trainer) => sql.unsafe`
    SELECT leaders.name, leaders.badge, leaders.description, gyms.city FROM leaders
    INNER JOIN gyms
    ON leaders.id = gyms.leader_id
`;

module.exports = {
  selectAllTrainers,
};
