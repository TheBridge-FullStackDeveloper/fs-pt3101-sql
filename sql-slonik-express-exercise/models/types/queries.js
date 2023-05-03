const {sql} = require('slonik')

// 4. Haz un endpoint pata obtener el nombre de todos los tipos guardados en base de datos
const selectTypes = () => (sql.unsafe`SELECT DISTINCT(name)
FROM elements;`)


module.exports = {
    selectTypes,
}