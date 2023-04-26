const db = require('../configs/db')
const { sql } = require('slonik')
const directors_movies = require('./directors_movies')

module.exports = {
    // Your directors queries
    async q1() {
        // README - Directors.1
        return await db.query(sql`SELECT name FROM directors WHERE name IS NOT NULL`
        ).rows

    },

    async q2() {
        // README - Directors.2
        return await db.query(sql
            `SELECT query_name, nickname FROM directors  `)
    },

    async q3() {
        // README - Directors.3
        return await db.query(sql` SELECT pic, nickname FROM directors WHERE nickname != '' `)
    },

    async q4() {
        // README - Directors.4
        return await db.query(sql`SELECT query_name , nationality FROM directors WHERE nationality = 'canadiense'`)
    },

    async q5() {
        // README - Directors.5
        return await db.query(sql`SELECT query_name, nationality FROM directors WHERE nationality IN ('británica,estadounidense','estadounidense,británico')`)
    },

    async q6() {
        // README - Directors.6
        return await db.query(sql`SELECT query_name, roles, nationality FROM directors WHERE roles IN 'ajedrecistas' `)
    },

    async q7() {
        // README - Directors.7
        return await db.query(sql `SELECT query_name, roles, nationality FROM directors WHERE nationality LIKE '%,%'`)
    },

    async q8() {
        // README - Directors.8
        return await db.query(sql `SELECT query_name, roles FROM directors WHERE roles LIKE '%,%,%'`)
    },
}