const { sql } = require('slonik');

const selectAllCities = () => sql.unsafe`
    SELECT leaders.name AS leader_name, leaders.badge AS leader_badge, string_agg(pokemons.name, ', ') AS pokemon_Name, gyms.city AS gym_training FROM leaders
    INNER JOIN gyms ON leaders.id = gyms.leader_id
    INNER JOIN pokemons ON leaders.id = pokemons.leader_id
    GROUP BY leaders.name, leader_badge, gyms.city
`

module.exports = {
    selectAllCities,
}