const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your joins from directors and movies queries
    async q24() {
        return await db.query(sql`
        SELECT DISTINCT distributor, query_name, production_budget FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE distributor IS NOT NULL AND query_name IS NOT NULL
        ORDER BY distributor
        `)
    },

    async q25() {
        return await db.query(sql`
        SELECT DISTINCT query_name, (COUNT(title)) as Total_Movies FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        GROUP BY query_name
        ORDER BY Total_Movies DESC
        `)
    },

    async q26() {
        return await db.query(sql `
        SELECT query_name, title, imdb_votes FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE imdb_votes IS NOT NULL
        ORDER BY imdb_votes ASC
        LIMIT 50
        `)
    },

    async q27() {
        return await db.query(sql`
        SELECT query_name, distributor FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE directors.name LIKE 'Christopher Nolan'
        `)
    },

    async q28() {
        return await db.query(sql`
        SELECT name, us_gross FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE us_gross IS NOT NULL
        ORDER BY us_gross DESC
        LIMIT 1
        `)
    },

    async q29() {
        return await db.query(sql`
        SELECT name, COUNT(movies.id) as total FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE release_date > '2000-01-01'
        GROUP BY name
        ORDER BY total DESC
        
        `)
    },

    async q30() {
        return await db.query(sql`
        SELECT name, major_genre, rotten_tomatoes_rating FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE major_genre = 'Drama' AND rotten_tomatoes_rating >70
        ORDER BY rotten_tomatoes_rating DESC
        `)
    },

    async q31() {
        return await db.query(sql`
        SELECT name FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE nationality ='australiana' AND release_date < '1995-01-01'

        `)
    },

    async q32() {
        return await db.query(sql`
        SELECT name, title, release_date, mpaa_rating FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE mpaa_rating = 'PG-13'
        `)
    },

    async q33() {
        return await db.query(sql`
        SELECT DISTINCT name, ROUND( AVG(imdb_rating)::numeric, 2 ) as media FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE imdb_rating IS NOT NULL AND nationality = 'canadiense'
        GROUP BY directors.name 
        ORDER BY media DESC OFFSET 4 LIMIT 1
        `)
    },

    async q34() {
        return await db.query(sql`
        SELECT ROUND( AVG(imdb_rating)::numeric, 2 ) as imbd_media,
        ROUND( AVG(rotten_tomatoes_rating)::numeric, 2 ) as rotten_tomatoes_rating_media FROM movies
        WHERE creative_type = 'Contemporary Fiction' AND release_date >= '1990-01-01' AND release_date <= '2000-12-31'

        `)
    },

    async q35() {
        return await db.query(sql`
        SELECT name, date_part('year', release_date), source, worldwide_gross FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE source LIKE '%Based on Play%' AND worldwide_gross < 500000

        `)
    },
}