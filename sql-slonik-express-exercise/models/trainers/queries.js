const {sql}=require("slonik")

const selectALLPokemons = () => sql.unsafe`
SELECT p.id, p.name, json_agg(elements.name) AS type
FROM pokemons AS p
JOIN pokemons_elements ON p.id = pokemons_elements.pokemon_id
JOIN elements ON pokemons_elements.element_id = elements.id
GROUP BY p.id, p.name
`
const selectTrainers = () => sql.unsafe`
SELECT p.name, l.badge, l.description, g.city
FROM leaders l
JOIN gyms g ON l.id = g.leader_id
JOIN pokemons p ON p.leader_id = l.id
 `

const trainersCities = () => sql.unsafe`
SELECT l.name, l.badge, string_agg(p.name, ', ') AS pokemon_names, g.city
FROM leaders l
JOIN gyms g ON l.id = g.leader_id
JOIN pokemons p ON p.leader_id = l.id
GROUP BY l.name, l.badge, g.city
`
const differentsTypes =() => sql.unsafe`
SELECT name
FROM elements 
`

const toOnlyType = (type) => sql.unsafe`
SELECT p.name,e.name
FROM pokemons p
INNER JOIN pokemons_elements pe ON pe.pokemon_id=p.id
INNER JOIN elements e ON pe.element_id=e.id
where e.name = ${type}
`

const onePokemon = (name)=> sql.unsafe`
SELECT p.list_id, p.name, JSON_AGG(elements.name) AS type FROM pokemons p
INNER JOIN pokemons_elements as pe ON p.id = pe.pokemon_id 
INNER JOIN elements as e ON e.id = pe.element_id
WHERE LOWER(p.name) = ${name}
GROUP BY p.id`

module.exports={
    selectALLPokemons,
    selectTrainers,
    trainersCities,
    differentsTypes,
    toOnlyType,
    onePokemon
}

