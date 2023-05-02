const { sql } = require('slonik')

const selectAllTrainers = (trainer) => (sql.unsafe`
SELECT
t.name AS "Trainer",
p.name AS "Pokemon",
p.level AS "Level",
e.name AS "Type"
FROM leaders AS t
INNER JOIN pokemons AS p
ON t.id = p.leader_id
INNER JOIN pokemons_elements AS pe
ON p.id = pe.pokemon_id
INNER JOIN elements AS e
ON e.id = pe.element_id
WHERE t.name LIKE t.name;
`)


const selectAllCitiesTrainers = (trainers) => (sql.unsafe`
SELECT leaders.name, leaders.badge,leaders.description, gyms.city
FROM leaders
INNER JOIN gyms
ON  leaders.id = gyms.leader_id

`)

const selectAllTrainersDinamic = (params) => (sql.unsafe`
SELECT leaders.name, leaders.badge,leaders.description, gyms.city, REPLACE(REPLACE(LOWER(leaders.name), ' ', ''), '.', '') AS Búsqueda
FROM leaders
INNER JOIN gyms
ON   REPLACE(REPLACE(LOWER(leaders.name), ' ', ''), '.', '') = ${params}

`)

const NewTrainers = (params) => (sql.unsafe`


`)


module.exports = {
    selectAllTrainers,
    selectAllCitiesTrainers,
    selectAllTrainersDinamic
    NewTrainers
}