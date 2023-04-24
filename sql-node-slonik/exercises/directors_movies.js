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
    },

    async q28() {
        // README - Directors_Movies.28
    },

    async q29() {
        // README - Directors_Movies.29
    },

    async q30() {
        // README - Directors_Movies.30
    },

    async q31() {
        // README - Directors_Movies.31
    },

    async q32() {
        // README - Directors_Movies.32
    },

    async q33() {
        // README - Directors_Movies.33
    },

    async q34() {
        // README - Directors_Movies.34
    },

    async q35() {
        // README - Directors_Movies.35
    },
}