const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    async q9() {
        // README - Movies.9
        return await db.query(sql`
            SELECT title FROM movies 
            WHERE title IS NOT null
        `)

    },

    async q10() {
        // README - Movies.10
        return await db.query(sql`
            SELECT title, mpaa_rating
            FROM movies
            WHERE mpaa_rating IS NOT NULL
        `)
    },

    async q11() {
        // README - Movies.11
        return await db.query(sql`
            SELECT title, production_budget, distributor
            FROM movies
            WHERE production_budget < 500000
            ORDER BY production_budget ASC
        `)
    },

    async q12() {
        // README - Movies.12
        return await db.query(sql`
            SELECT title, major_genre, production_budget
            FROM movies
            WHERE production_budget IS NOT NULL
            ORDER BY production_budget DESC
            LIMIT 10           
        `)
    },

    async q13() {
        // README - Movies.13
        return await db.query(sql`
            SELECT title, source 
            FROM movies
            WHERE source = 'Remake'
        `)
    },

    async q14() {
        // README - Movies.14
        return await db.query(sql`
            SELECT title, distributor, imdb_rating
            FROM movies
            WHERE imdb_rating IS NOT NULL
            ORDER BY imdb_rating ASC   
        `)
    },

    async q15() {
        // README - Movies.15
        return await db.query(sql`
            SELECT title, rotten_tomatoes_rating 
            FROM movies
            ORDER BY rotten_tomatoes_rating ASC
            LIMIT 100
        `)
    },

    async q16() {
        // README - Movies.16
        return await db.query(sql`
            SELECT major_genre, imdb_rating, imdb_votes FROM movies
            WHERE imdb_rating IS NOT NULL AND imdb_votes IS NOT NULL
            ORDER BY imdb_rating DESC, imdb_votes DESC
            LIMIT 20        
        `)
    },

    async q17() {
        // README - Movies.17
        return await db.query(sql`
            SELECT SUM(production_budget) AS production_sumatory
            FROM movies
            WHERE mpaa_rating = 'Not Rated' 
            AND title IS NOT NULL
        `)
    },

    async q18() {
        // README - Movies.18
        return await db.query(sql`
            SELECT title, release_date
            FROM movies
            WHERE release_date > NOW()
            ORDER BY release_date ASC        
        `)
    },

    async q19() {
        // README - Movies.19
        return await db.query(sql`
            SELECT title, us_gross, release_date 
            FROM movies
            WHERE release_date
            BETWEEN '1950-01-01' AND '1980-12-31'
            ORDER BY release_date ASC
        `)
    },

    async q20() {
        // README - Movies.20
        // return await db.query(sql`
        
        // `)
    },

    async q21() {
        // README - Movies.21
        // return await db.query(sql`
        
        // `)
        
    },

    async q22() {
        // README - Movies.22
        // return await db.query(sql`
        
        // `)
        
    },

    async q23() {
        // README - Movies.23
        // return await db.query(sql`
        
        // `)
        
    },
}