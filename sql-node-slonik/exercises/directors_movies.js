const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your joins from directors and movies queries
    async q24() {
        // README - Directors_Movies.24
        return await db.query(sql`
            SELECT directors.query_name, movies.production_budget, movies.distributor 
            FROM directors 
            INNER JOIN movies
            ON directors.id = movies.director
            WHERE movies.distributor IS NOT NULL
            ORDER BY movies.production_budget ASC     
        `)
    },

    async q25() {
        // README - Directors_Movies.25
        return await db.query(sql`
            SELECT directors.query_name, count(*) AS movies_made FROM directors
            INNER JOIN movies
            ON directors.id = movies.director
            GROUP BY directors.query_name
            ORDER BY movies_made DESC        
        `)
    },

    async q26() {
        // README - Directors_Movies.26
        return await db.query(sql`
            SELECT directors.query_name, movies.title, movies.imdb_votes 
            FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            ORDER BY imdb_votes ASC
            LIMIT 50

        `)
    },

    async q27() {
        // README - Directors_Movies.27
        return await db.query(sql`
            SELECT directors.query_name, movies.distributor 
            FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            WHERE directors.name = 'Christopher Nolan'
        `)
    },

    async q28() {
        // README - Directors_Movies.28
        return await db.query(sql`
            SELECT directors.name, SUM(movies.us_gross) AS total_us_gross 
            FROM directors
            JOIN movies ON directors.id = movies.director
            GROUP BY directors.name    
            ORDER BY total_us_gross DESC
            LIMIT 1
        `)
    },

    async q29() {
        // README - Directors_Movies.29
        return await db.query(`
            SELECT directors.name, COUNT(*) AS total_movies_made
            FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            WHERE movies.release_date BETWEEN '2000-01-01' AND 'NOW()'
            GROUP BY directors.name
            ORDER BY total_movies_made DESC
            LIMIT 1
        `)
    },

    async q30() {
        // README - Directors_Movies.30
        return await db.query(sql`
            SELECT directors.name, movies.major_genre, movies.rotten_tomatoes_rating
            FROM directors
            INNER JOIN movies
            ON directors.id = movies.director
            WHERE movies.major_genre = 'Drama' 
            AND rotten_tomatoes_rating > 70
            ORDER BY rotten_tomatoes_rating ASC
        `)
    },

    async q31() {
        // README - Directors_Movies.31
        return await db.query(sql`
            SELECT directors.name, directors.nationality, movies.release_date
            FROM directors
            INNER JOIN movies
            ON directors.id = movies.director
            WHERE movies.release_date < '1995-12-31'
            ORDER BY movies.release_date DESC
        `)
    },

    async q32() {
        // README - Directors_Movies.32
        return await db.query(sql`
            SELECT directors.name, movies.title, movies.release_date, movies. mpaa_rating
            FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            WHERE mpaa_rating = 'PG-13'
        `)
    },

    async q33() {
        // README - Directors_Movies.33
        return await db.query(sql`
            SELECT directors.name, movies.imdb_rating 
            FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            WHERE directors.nationality='canadiense' AND imdb_rating IS NOT NULL 
            ORDER BY imdb_rating DESC 
            LIMIT 1 OFFSET 4
        `)
    },

    async q34() {
        // README - Directors_Movies.34
        return await db.query(`
            SELECT movies.title, movies.major_genre FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            WHERE movies.release_date 
            BETWEEN '1990-01-01' AND '2000-12-31'
            ORDER BY movies.rotten_tomatoes_rating ASC, movies.imdb_rating ASC
        `)
    },

    async q35() {
        // README - Directors_Movies.35
        return await db.query(sql`
            SELECT directors.name, movies.release_date, movies.us_gross
            FROM movies
            INNER JOIN directors
            ON directors.id = movies.director
            WHERE movies.source = 'Based on Game'
            AND movies.us_gross < 500000
        `)
    },
}