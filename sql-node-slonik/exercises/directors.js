const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        return await db.query(sql`
        SELECT * FROM directors 
        WHERE directors.name != ''
        `)
    },

   async q2() {
        return await db.query(sql`
        SELECT query_name, nickname
        FROM directors 
        WHERE nickname != ''
        `)
    },

    async q3() {
        return await db.query(sql`
        SELECT pic, nickname
        FROM directors 
        WHERE nickname != ''
        `)

    },

    async q4() {
        return await db.query(sql`
        SELECT query_name, nationality
        FROM directors 
        WHERE nationality = 'Canadiense'
        `)
    },

    async q5() {
        return await db.query(sql`
        SELECT query_name, nationality
        FROM directors 
        WHERE nationality = 'estadounidense,británico'
        `)
    },

    async q6() {
        return await db.query(sql`
        SELECT query_name, nationality, roles
        FROM directors 
        WHERE roles= 'ajedrecista'; 
        `)
    },

    async q7() {
        return await db.query(sql`
        SELECT query_name, name, nationality
        FROM directors 
        WHERE nationality LIKE '%,%'
        `)
    },

    async q8() {
        return await db.query(sql` 
        SELECT query_name, roles
        FROM directors
        WHERE roles LIKE '%,%,%'

        `)
    },
}