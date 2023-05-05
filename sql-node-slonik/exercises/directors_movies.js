const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your joins from directors and movies queries
    async q24() {
        return await db.query(sql`
        SELECT d.query_name,m.production_budget,m.distributor
        FROM movies AS m
        INNER JOIN directors AS d
        ON d.id=m.director
        WHERE m.distributor IS NOT NULL AND d.query_name IS NOT NULL
        `)
    },

    async q25() {
        return await db.query(sql`
        SELECT d.query_name, COUNT(*) as total_movies
        FROM movies as m
        INNER JOIN directors as d
        ON m.director = d.id
        GROUP BY d.query_name`)
    },

    async q26() {
        return await db.query(sql`
        SELECT d.query_name,m.title,m.imdb_votes
        FROM movies AS m
        INNER JOIN directors AS d
        ON d.id= m.directors
        ORDER BY imdb_votes DESC
        LIMIT 50`)
    },

    async q27() {
        return await db.query(sql`
        SELECT d.query_name,m.distributor
        FROM directors AS d
        INNER JOIN movies AS m
        ON d.id=m.director
        WHERE m.distributor = 'Christopher Nolan'`)
    },

    async q28() {
        return await db.query(sql`
        SELECT d.name,SUM(m.worldwide_gross) AS eeuu_incomes
        FROM directors AS d
        INNER JOIN movies AS m
        ON d.id=m.director
        GROUP BY d.name
        ORDER BY eeuu_incomes DESC
        LIMIT 1`)
    },

    async q29() {
        return await db.query(sql`
        SELECT d.name, COUNT(*) AS total_movies
        FROM movies AS m
        INNER JOIN directors AS d ON d.id = m.director
        WHERE m.release_date BETWEEN '2000-01-01' AND '2023-04-26'
        GROUP BY d.name
        ORDER BY total_movies DESC
        LIMIT 1`)
    },

    async q30() {
        return await db.query(sql`
        SELECT d.name, m.major_genre, m.rotten_tomatoes_rating
        FROM movies AS m
        INNER JOIN directors AS d ON d.id = m.director
        WHERE m.major_genre = 'Drama' AND m.rotten_tomatoes_rating > 70
        `)
    },

    async q31() {
        return await db.query(sql`
        SELECT d.name,d.nationality,m.release_date
        FROM directors AS d
        INNER JOIN movies AS m ON d.id=m.director
        WHERE m.release_date >= '1995-01-01' AND d.nationality= 'australiana'`)
    },

    async q32() {
        return await db.query(sql`
        SELECT d.name,m.title,m.release_date,m.mpaa_rating
        FROM movies AS m
        INNER JOIN directors AS d ON d.id=m.director
        WHERE m.mpaa_rating = 'PG-13'`)
    },

    async q33() {
        return await db.query(sql`
        SELECT d.name, m.imdb_rating
        FROM directors AS d
        INNER JOIN movies AS m ON d.id = m.director
        WHERE d.nationality = 'canadiense'
        ORDER BY m.imdb_rating DESC
        OFFSET 4
        LIMIT 1`)
    },

    async q34() {
        return await db.query(sql`
        SELECT AVG((rotten_tomatoes_rating + imdb_rating)/2) AS media_criticas
        FROM movies
        WHERE release_date BETWEEN '1990-01-01' AND '2000-12-31'
        AND creative_type = 'Contemporary Fiction' 
        ORDER BY media_criticas DESC
        LIMIT 20;`)
    },

    async q35() {
        return await db.query(sql`
        SELECT d.name, DATE_TRUNC('year', m.release_date) AS year
        FROM movies m
        INNER JOIN directors d ON m.director = d.id
        WHERE m.source = 'Based on play' AND m.worldwide_gross < 500000;`)
    },
}