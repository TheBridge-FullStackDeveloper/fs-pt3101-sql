const { sql } = require('slonik')

const selectAllTrainers = (trainer) => (sql.unsafe`
    SELECT
        t.name AS "Trainer",
        p.name AS "Pokemon",
        p.level AS "Level",
        e.name AS "Type"
    FROM trainers AS t
    INNER JOIN pokemons AS p
    ON t.id = p.trainer_id
    INNER JOIN pokemons_elements AS pe
    ON p.id = pe.pokemon_id
    INNER JOIN elements AS e
    ON e.id = pe.element_id
    WHERE t.name LIKE ${trainer};
`)

const selectAllPokemons =

module.exports = {
    selectAllTrainers,
}