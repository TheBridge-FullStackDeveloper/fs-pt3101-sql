const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {

    async q1() {
        return await db.query(sql`
      SELECT name
      FROM directors
      WHERE name IS NOT NULL`
        )
    },

    async q2() {
        return await db.query(sql`
        SELECT query_name, nickname
        FROM directors`)
    },

    async q3() {
        return await db.query(sql`
            SELECT pic,nickname
            FROM directors
            WHERE nickname !=''
            `)
    },

    async q4() {
       return await db.query(sql`
       SELECT query_name,nationality
       FROM directors
       WHERE nationality = 'canadiense'`)
    },

    async q5() {
        return await db.query(sql`
        SELECT query_name,nationality
        FROM directors
        WHERE nationality='británica,estadounidense'`)
    },

    async q6() {
       return await db.query(sql`
       SELECT query_name, nationality
       FROM directors
       WHERE roles like '%ajedrecistas%'`)
    },

    async q7() {
        return await db.query(sql`
        SELECT query_name,name,nationality
        FROM directors
        WHERE nationality like '%,%'`)
    },

    async q8() {
     return await db.query(sql`
    SELECT query_name, roles
    FROM directors
    WHERE roles LIKE "%,%,%,%"
    `)
    },
}