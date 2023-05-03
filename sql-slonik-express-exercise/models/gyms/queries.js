const { sql } = require('slonik')
const selectCities=() => sql.unsafe` 

SELECT l.name as leader_name, l.badge, p.*, g.city
FROM leaders l
INNER JOIN pokemons p
ON l.id=p.leader_id
INNER JOIN gyms g
ON l.id=g.leader_id
ORDER BY leader_name



`

module.exports={
    selectCities,
}