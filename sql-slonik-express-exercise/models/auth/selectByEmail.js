const { sql } = require("slonik");

//Ejercicio 16
module.exports = (email) => sql.unsafe`
    SELECT email, password
    FROM users
    WHERE email LIKE ${email}`