const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {

    async q9() {
        const result = await db.query(sql`
        SELECT title
        FROM movies
        WHERE title IS NOT NULL
        `)
        return result.rows
    },

    async q10() {
        const result = await db.query(sql`
        SELECT title, mpaa_rating
        FROM movies
        WHERE mpaa_rating IS NOT NULL
        `)
        return result.rows
    },

    async q11() {
        const result = await db.query(sql`
        SELECT title, production_budget, distributor
        FROM movies
        WHERE production_budget < 500000
        `)
        return result.rows
    },

    async q12() {
        const result = await db.query(sql`
        SELECT title, major_genre, production_budget
        FROM movies
        WHERE production_budget IS NOT NULL
        ORDER BY production_budget DESC
        LIMIT 10
        `)
        return result.rows
    },

    async q13() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE source = 'Remake'
        `)
        return result.rows
    },

    async q14() {
        const result = await db.query(sql`
        SELECT title, distributor, imdb_rating
        FROM movies
        WHERE imdb_rating IS NOT NULL
        `)
        return result.rows
    },

    async q15() {
        const result = await db.query(sql`
        SELECT title, rotten_tomatoes_rating
        FROM movies
        ORDER BY rotten_tomatoes_rating
        LIMIT 100
        `)
        return result.rows
    },

    async q16() {
        const result = await db.query(sql`
        SELECT title, major_genre, imdb_rating, imdb_votes
        FROM movies
        WHERE imdb_rating IS NOT NULL AND imdb_votes IS NOT NULL
        ORDER BY imdb_rating DESC, imdb_votes DESC
        `)
        return result.rows
    },

    async q17() {
        const result = await db.query(sql`
        SELECT SUM(production_budget) AS sum_of_budgets
        FROM movies
        WHERE mpaa_rating = 'Not Rated' AND title IS NOT NULL
        `)
        return result.rows         
    },

    async q18() {
        const result = await db.query(sql`
        SELECT title, release_date
        FROM movies
        WHERE release_date > CURRENT_DATE
        `)
        return result.rows
    },

    async q19() {
        const result = await db.query(sql`
        SELECT title, us_gross, release_date
        FROM movies
        WHERE release_date BETWEEN '1950-01-01' AND '1980-12-31'
        `)
        return result.rows
    },

    async q20() {
        const result = await db.query(sql`
        SELECT title, us_gross, worldwide_gross
        FROM movies
        WHERE us_gross = 0 OR worldwide_gross = 0
        `)
        return result.rows
    },

    async q21() {
        const result = await db.query(sql`
        SELECT title, us_gross
        FROM movies
        ORDER BY us_gross
        LIMIT 50
        `)
        return result.rows
    },

    async q22() {
        const result = await db.query(sql`
        SELECT title, source
        FROM movies
        WHERE title LIKE 'F%'
        `)
        return result.rows
    },

    async q23() {
        const result = await db.query(sql`
        SELECT distributor, production_budget, creative_type, major_genre
        FROM movies
        WHERE distributor = 'Sony Pictures' AND production_budget > 10000000
        `)
        return result.rows
    },
}