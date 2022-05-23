const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        const result = await db.query(sql`
        SELECT name 
        FROM directors
        WHERE name != ''
        `)
        return result.rows
    },

    async q2() {
        const result = await db.query(sql`
        SELECT query_name, nickname
        FROM directors
        `)
        return result.rows
    },

    async q3() {
        const result = await db.query(sql`
        SELECT nickname, pic
        FROM directors
        WHERE nickname != ''
        `)
        return result.rows
    },

    async q4() {
        const result = await db.query(sql`
        SELECT query_name, nationality
        FROM directors
        WHERE nationality LIKE '%canadiense%'
        `)
        return result.rows
    },


    /*SELECT query_name, nationality
FROM directors
WHERE nationality IN ('británica,estadounidense', 'estadounidense,británico')*/
    async q5() {
        const data = await db.query(sql`
        SELECT query_name, nationality
        FROM directors
        WHERE nationality LIKE '%estadounidense%'
        AND nationality LIKE '%brit%'
        `)
    },

    async q6() {
        const result = await db.query(sql`
        SELECT query_name, nationality, roles
        FROM directors
        WHERE roles LIKE '%ajedrecista%'
        `)
        return result.rows
    },

    async q7() {
        const result = await db.query(sql`
        SELECT query_name, nationality, roles   
        FROM directors
        WHERE nationality LIKE '%,%'
        `)
        return result.rows
    },

    async q8() {
        const result = await db.query(sql`
        SELECT query_name, roles
        FROM directors
        WHERE roles LIKE '%,%,%'
        `)
        return result.rows
    },
}