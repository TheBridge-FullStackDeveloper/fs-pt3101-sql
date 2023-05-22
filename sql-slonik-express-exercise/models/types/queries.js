const { sql } = require('slonik');

// Ejercicio 4

const selectAllTypes = () => sql.unsafe`
    SELECT name AS type_name FROM elements
`

module.exports = {
    selectAllTypes,
}