const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    async q9() {
        return await db.query(sql`
        SELECT id,title FROM movies
        WHERE title IS NOT NULL
        `)
    },

    async q10() {
        return await db.query(sql`
        SELECT title, mpaa_rating FROM movies
        WHERE mpaa_rating IS NOT NULL
        `)
    },

    async q11() {
        return await db.query(sql`
        SELECT title, production_budget, distributor FROM movies
        WHERE production_budget < 500000
        `)
    },

    async q12() {
        return await db.query(sql`
        SELECT title, major_genre, production_budget FROM movies
        WHERE production_budget IS NOT NULL
        ORDER BY production_budget DESC LIMIT 10
        `)
    },

    async q13() {
        return await db.query(sql`
        SELECT title, source FROM  movies
        WHERE source LIKE 'Remake'
        `)
    },

    async q14() {
        return await db.query(sql`
        SELECT title, distributor, imdb_rating FROM movies
        WHERE imdb_rating IS NOT NULL
        `)
    },

    async q15() {
        return await db.query(sql`
        SELECT title, rotten_tomatoes_rating FROM movies
        WHERE rotten_tomatoes_rating IS NOT NULL
        ORDER BY rotten_tomatoes_rating DESC LIMIT 100
        `)
    },

    async q16() {
        return await db.query(sql`
        SELECT title, major_genre, imdb_rating, imdb_votes  FROM movies
        WHERE imdb_votes IS NOT NULL
        ORDER BY imdb_rating DESC, imdb_votes DESC
        LIMIT 20
        `)
    },

    async q17() {
        return await db.query(sql`
        SELECT SUM(production_budget) FROM movies
        WHERE mpaa_rating != 'Not Rated' AND title IS NOT NULL
        `)
    },

    async q18() {
        return await db.query(sql`
        SELECT title, release_date FROM movies
        WHERE release_date > CURRENT_DATE
        ORDER BY release_date DESC
        `)
    },

    async q19() {
       return await db.query(sql`
       SELECT title, us_gross, release_date from movies
        WHERE release_date > '1950-01-01' AND release_date < '1980-12-31'
        ORDER BY release_date
       `)
    },

    async q20() {
        return await db.query(sql`
        SELECT title, us_gross, worldwide_gross FROM movies
        WHERE us_gross =0 OR worldwide_gross = 0 
        `)
    },

    async q21() {
        return await db.query(sql`
        SELECT title, us_gross FROM movies
        WHERE us_gross IS NOT NULL AND us_gross > 0
        ORDER BY us_gross ASC LIMIT 50
        `)
    },

    async q22() {
        return await db.query(sql`
        SELECT title, source FROM movies
        WHERE title LIKE 'F%'
        `)
    },

    async q23() {
        return await db.query(sql`
        SELECT distributor, production_budget, creative_type, major_genre FROM movies
        WHERE production_budget > 10000000 AND distributor LIKE 'Sony Pictures'
        `)
    },
}