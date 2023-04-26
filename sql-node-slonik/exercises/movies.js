const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    async q9() {return (await db.query(sql
        `SELECT title 
        FROM movies 
        WHERE title IS NOT NULL`)).rows
        // README - Movies.9
    },

    async q10() {
        const result = await db.query(sql`
        SELECT title, mpaa_rating
        FROM movies
        WHERE mpaa_rating IS NOT NULL
        `)
        return result.rows
        // README - Movies.10
    },

    async q11() {
        const result = await db.query(sql`
        SELECT title, production_budget,distributor
        FROM movies
        WHERE production_budget < 500000
        `)
        return result.rows
        // README - Movies.11
    },

    async q12() {
        const result = await db.query(sql`
        SELECT title, major_genre,production_budget
        FROM movies
        WHERE production_budget IS NOT NULL
        ORDER BY production_budget DESC
        LIMIT 10
        `)
        return result.rows
        // README - Movies.12
    },

    async q13() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE source LIKE 'Remake'
        `)
        return result.rows
        // README - Movies.13
    },

    async q14() {
        const result = await db.query(sql`
        SELECT title, distributor, imdb_rating
        FROM movies
        WHERE imdb_rating IS NOT NULL
        `)
        return result.rows
        // README - Movies.14
    },

    async q15() {
        const result = await db.query(sql`
        SELECT title, rotten_tomatoes_rating
        FROM movies
        ORDER BY rotten_tomatoes_rating
        LIMIT 100
        `)
        return result.rows
        // README - Movies.15
    },

    async q16() {
        const result = await db.query(sql`
        SELECT title, major_genre,imdb_rating,imdb_votes
        FROM movies
        WHERE imdb_rating IS NOT NULL 
        ORDER BY imdb_rating DESC,imdb_votes DESC
        LIMIT 20
        `)
        return result.rows
        // README - Movies.16
    },

    async q17() {
        const result = await db.query(sql`
        SELECT SUM (production_budget)
        FROM movies
        WHERE mpaa_rating LIKE 'Not Rated' AND title IS NOT NULL 
        `)
        return result.rows
        // README - Movies.17
    },

    async q18() {
        const result = await db.query(sql`
        SELECT title, release_date
        FROM movies
        WHERE release_date > CURRENT_DATE
        `)
        return result.rows
        // README - Movies.18
    },

    async q19() {
        const result = await db.query(sql`
        SELECT title, us_gross, release_date
        FROM movies
        WHERE release_date BETWEEN
            '1950-01-01' AND '1980-12-31'
        `)
        return result.rows
        // README - Movies.19
    },

    async q20() {
        const result = await db.query(sql`
        SELECT title, us_gross, worldwide_gross
        FROM movies
        WHERE us_gross = 0 OR worldwide_gross = 0   
        `)
        return result.rows

        // README - Movies.20
    },

    async q21() {
        const result = await db.query(sql`
        SELECT title, us_gross
        FROM movies
        ORDER BY us_gross
        LIMIT 50
        `)
        return result.rows
        // README - Movies.21
    },

    async q22() {
        // README - Movies.22
    },

    async q23() {
        // README - Movies.23
    },
}