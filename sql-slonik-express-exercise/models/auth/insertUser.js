const { sql } = require("slonik");

//Ejercicio 15
module.exports = (email, password) => sql.unsafe`
        INSERT INTO users (
            email, password
        ) VALUES (
            ${email}, ${password}
        );`

