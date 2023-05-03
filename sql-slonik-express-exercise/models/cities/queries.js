const {sql} = require('slonik');

 // 3. Haz un endpoint para obtener `name`, `badge` (trainers), lista de pokemons y nombre de ciudad de todos los entrenadores

const selectAllCitiesTotal = ()=> sql.unsafe`SELECT
l.name AS trainer_name,
l.badge AS trainer_badge,
JSON_AGG(DISTINCT p.name ORDER BY p.name) AS pokemon_list,
g.city AS city_name
FROM
leaders AS l
JOIN pokemons AS p ON l.id = p.leader_id
JOIN gyms AS g ON l.id = g.leader_id
GROUP BY
l.name,
l.badge,
g.city
ORDER BY
l.name ASC;`
  
const selectAllCities = (name) => sql.unsafe`SELECT leaders.name AS trainer_name,
leaders.badge, pokemons.name AS pokemon_name, gyms.city
FROM leaders LEFT JOIN pokemons ON leaders.id = pokemons.leader_id
LEFT JOIN gyms ON leaders.id = gyms.leader_id
WHERE leaders.name LIKE ${name}
;`

module.exports = {
    selectAllCities,
    selectAllCitiesTotal,
}

// e intentado pasarle como parametro (name) de leaders.name LIKE ${name} pero no me sale en postman poniendo localhost:4000/cities/Erika para comprobar