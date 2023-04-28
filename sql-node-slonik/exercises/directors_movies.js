const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your joins from directors and movies queries
    async q24() {
        // README - Directors_Movies.24
        return await db.query(sql`
        SELECT query_name, production_budget, distributor
        FROM directors RIGHT JOIN movies ON movies.director = directors.id  
        WHERE distributor IS NOT NULL        
        `)
    },

    async q25() {
        // README - Directors_Movies.25
        return await db.query(sql`
        SELECT directors.query_name, COUNT(*) AS num_movies
        FROM directors LEFT JOIN movies ON movies.director = directors.id
        GROUP BY directors.query_name     
        `)
    },

    async q26() {
        // README - Directors_Movies.26
        return await db.query(sql`
        SELECT query_name, title, imdb_votes
        FROM directors RIGHT JOIN movies ON movies.director = directors.id
        ORDER BY imdb_votes ASC
        FETCH FIRST 50 ROWS ONLY
        `)
    },

    async q27() {
        // README - Directors_Movies.27
        return await db.query(sql`
        SELECT query_name, distributor
        FROM directors JOIN movies ON movies.director = directors.id
        WHERE query_name LIKE 'Christopher_Nolan'
        `)
    },

    async q28() {
        // README - Directors_Movies.28
        return await db.query(sql`
        SELECT name, us_gross
        FROM directors JOIN movies ON movies.director = directors.id
        WHERE us_gross IS NOT NULL
        ORDER BY us_gross DESC
        FETCH FIRST 1 ROW ONLY
        `)
    },

    async q29() {
        // README - Directors_Movies.29
        return await db.query(sql`
        SELECT directors.name, COUNT(*) AS num_movies
        FROM directors INNER JOIN movies ON movies.director = directors.id
        WHERE release_date BETWEEN 'Jan 01 2000' AND current_date
        GROUP BY directors.name
        ORDER BY num_movies DESC
        FETCH FIRST 1 ROW ONLY
        `)

    },

    async q30() {
        // README - Directors_Movies.30
        return await db.query(sql`
        SELECT name, major_genre, rotten_tomatoes_rating
        FROM directors RIGHT JOIN movies ON movies.director = directors.id
        WHERE major_genre LIKE 'Drama' AND rotten_tomatoes_rating > 70
        `)
    },

    async q31() {
        // README - Directors_Movies.31
        return await db.query(sql`
        SELECT name
        FROM directors LEFT JOIN movies ON movies.director = directors.id
        WHERE nationality LIKE 'australiana' AND release_date < 'Jan 01 1995'
        `)
    },

    async q32() {
        // README - Directors_Movies.32, lo he dejado RIGHT porque pregunta por las películas
        return await db.query(sql`
        SELECT name, title, release_date, mpaa_rating
        FROM directors RIGHT JOIN movies ON movies.director = directors.id
        WHERE mpaa_rating LIKE 'PG-13'
        `)
    },

    async q33() {
        // README - Directors_Movies.33
        return await db.query(sql`
        SELECT directors.name, avg(imdb_rating) AS avg_rating
        FROM directors LEFT JOIN movies ON movies.director = directors.id
        WHERE nationality LIKE 'canadiense'
        GROUP BY directors.name
        ORDER BY avg_rating DESC
        LIMIT 1 OFFSET 4
        `)
    },

    async q34() {
        // README - Directors_Movies.34
        return await db.query(sql`
        SELECT movies.title, avg(rotten_tomatoes_rating+imdb_rating) AS avg_rating
        FROM directors RIGHT JOIN movies ON movies.director = directors.id
        WHERE release_date BETWEEN 'Jan 01 1990' AND 'Dec 31 2000' AND rotten_tomatoes_rating IS NOT NULL AND imdb_rating IS NOT NULL
        GROUP BY movies.title
        ORDER BY avg_rating DESC
        FETCH FIRST 20 ROWS ONLY
        `)
    },

    async q35() {
        // README - Directors_Movies.35
        return await db.query(sql`
        SELECT name, substring(release_date from 8 for 12)
        FROM directors INNER JOIN movies ON movies.director = directors.id
        WHERE source LIKE 'Based on Play' AND 
        
        `)
    },
}