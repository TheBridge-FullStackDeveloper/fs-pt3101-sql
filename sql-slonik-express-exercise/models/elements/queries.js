const { sql } = require('slonik')
const selectTypes=() => sql.unsafe` 
SELECT name as type_name
FROM elements
`

module.exports={
    selectTypes,
}