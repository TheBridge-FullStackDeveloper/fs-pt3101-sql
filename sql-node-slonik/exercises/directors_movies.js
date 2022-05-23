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
            ORDER BY COUNT(title) DESC
            LIMIT 1)
        `)
        return result.rows
    },

    async q30() {
        const result = await db.query(sql`
        SELECT  query_name, major_genre, rotten_tomatoes_rating
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE major_genre = 'Drama' AND
        rotten_tomatoes_rating > 70
        `)
        return result.rows
    },

    async q31() {
        const result = await db.query(sql`
        SELECT  query_name
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE nationality LIKE '%australiana%' AND
        release_date < '1995-01-01'
        `)
        return result.rows
    },

    async q32() {
        const result = await db.query(sql`
        SELECT  query_name, title, release_date, mpaa_rating
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE mpaa_rating = 'PG-13'
        `)
        return result.rows
    },

    async q33() {
        const result = await db.query(sql`
        SELECT  query_name, nationality, imdb_rating
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE nationality LIKE '%canadiense%' AND imdb_rating IS NOT NULL
        ORDER BY imdb_rating DESC, directors.id
        OFFSET 4 LIMIT 1
        `)
        return result.rows
    },

    async q34() {
        const result = await db.query(sql`
        SELECT rotten_tomatoes_rating, imdb_rating
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE creative_type = 'Contemporary Fiction'
        AND rotten_tomatoes_rating IS NOT NULL
        AND imdb_rating IS NOT NULL
        AND release_date BETWEEN '1990-01-01' AND '2000-12-31'
GROUP BY rotten_tomatoes_rating, imdb_rating
        ORDER BY rotten_tomatoes_rating DESC, imdb_rating DESC
        LIMIT 20
        `)
        return result.rows
    },

    async q35() {
        const result = await db.query(sql`
        SELECT query_name, DATE_PART('year', release_date)
        FROM movies
        JOIN directors
            ON movies.director = directors.id
        WHERE source = 'Based on Play'
        AND worldwide_gross >= 500000
        `)
        return result.rows
    },
}