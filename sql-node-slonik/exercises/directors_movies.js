const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    
    async q24() {
        const result = await db.query(sql`
        SELECT query_name, production_budget, distributor
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE distributor IS NOT NULL
        `)
        return result.rows
    },

    async q25() {
        const result = await db.query(sql`
        SELECT  query_name, COUNT(*)
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        GROUP BY query_name
        `)
        return result.rows
    },

    async q26() {
        const result = await db.query(sql`
        SELECT  query_name, title, imdb_votes
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        ORDER BY imdb_votes
        LIMIT 50
        `)
        return result.rows
    },

    async q27() {
        const result = await db.query(sql`
        SELECT  query_name, distributor
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE query_name = 'Christopher_Nolan'
        `)
        return result.rows
    },

    async q28() {
        const result = await db.query(sql`
        SELECT  query_name, us_gross
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE us_gross = (SELECT MAX(us_gross) FROM movies)
        `)
        return result.rows
    },
    
    async q29() {
        const result = await db.query(sql`
        SELECT  query_name, release_date
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE query_name = (
            SELECT  query_name
            FROM movies
            JOIN directors
                ON movies.director = directors.id
             WHERE release_date >= '2000-01-01'
            GROUP BY query_name
            ORDER BY COUNT(*) DESC
            LIMIT 1)
        `)
        return result.rows
    },

    async q30() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },

    async q31() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },

    async q32() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },

    async q33() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },

    async q34() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },

    async q35() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },
}