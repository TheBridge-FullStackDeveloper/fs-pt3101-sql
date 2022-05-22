const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        return await db.query(sql`
        SELECT name FROM directors
        WHERE LENGTH(name) > 0
        `)
    },

    async q2() {
        return await db.query(sql `
        SELECT query_name, nickname from directors
        `)
    },

    async q3() {
        return await db.query(sql `
        SELECT pic, nickname from directors
        WHERE LENGTH(nickname)>0
        `)
    },

    async q4() {
        return await db.query(sql `
        SELECT query_name, nationality FROM directors
        WHERE nationality LIKE 'canadiense'
        `)
    },

    async q5() {
        return await db.query(sql `
        SELECT query_name, nationality FROM directors
        WHERE nationality LIKE 'británica,estadounidense'
        `)
    },

    async q6() {
        return await db.query(sql`
        SELECT query_name, nationality, roles  FROM directors
        WHERE roles LIKE '%ajedrecista%'
        `)
    },

    async q7() {
        /*
        return await db.query(sql `
        SELECT query_name, name, nationality, LENGTH(nationality) - LENGTH(REPLACE(nationality,',','')) AS comaCount FROM directors
        WHERE LENGTH(nationality) - LENGTH(REPLACE(nationality,',','')) > 0 AND LENGTH(nationality) - LENGTH(REPLACE(nationality,',','')) < 2 
        `)
        */
        return await db.query(sql `
        SELECT query_name, name, nationality FROM directors
        WHERE nationality LIKE '%,%'
        `)
    },

    async q8() {
        return await db.query(sql `
        SELECT query_name, roles FROM directors
        WHERE roles LIKE '%,%,%'
        `)
    },
}