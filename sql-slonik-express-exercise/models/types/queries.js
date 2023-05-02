const { sql } = require('slonik');


const selectAllTypes = () => sql.unsafe`
    SELECT name AS type_name FROM elements
`

module.exports = {
    selectAllTypes,
}