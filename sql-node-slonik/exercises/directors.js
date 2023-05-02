const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        const query = await db.query(sql`
            SELECT name FROM directors
            WHERE name != '';
        `);

        return query.rows;
    },

    async q2() {
        const query = await db.query(sql`
            SELECT query_name, nickname FROM directors;
        `);

        return query.rows;
    },

    async q3() {
        const query = await db.query(sql`
            SELECT pic, nickname FROM directors
            WHERE nickname != '';
        `);

        return query.rows;
    },

    async q4() {
        const query = await db.query(sql`
            SELECT query_name, nationality FROM directors
            WHERE nationality = 'canadiense';
        `);

        return query.rows;
    },

    async q5() {
        const query = await db.query(sql`
            SELECT query_name, nationality FROM directors
            WHERE nationality LIKE '%británic%' AND nationality LIKE '%estadounidense%';
        `);

        return query.rows;
    },

    async q6() {
        const query = await db.query(sql`
            SELECT query_name, nationality, roles FROM directors
            WHERE roles LIKE '%ajedrecista%';
        `);

        return query.rows;        
    },

    async q7() {
        const query = await db.query(sql`
            SELECT query_name, name, nationality FROM directors
            WHERE nationality LIKE '%,%';
        `);

        return query.rows; 
    },

    async q8() {
        const query = await db.query(sql`
            SELECT query_name, roles FROM directors
            WHERE roles LIKE '%,%,%';
        `);

        return query.rows; 
    },
}