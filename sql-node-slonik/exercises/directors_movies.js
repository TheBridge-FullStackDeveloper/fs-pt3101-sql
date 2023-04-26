const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your joins from directors and movies queries
    async q24() {
        return db.query(sql`
        SELECT query_name, production_budget, distributor
        FROM directors 
        INNER JOIN movies 
        ON directors.id = movies.id
        WHERE (query_name IS NOT NULL) AND (production_budget IS NOT NULL) AND  (distributor IS NOT NULL)
        `)
    },

    async q25() {
        return db.query(sql`
        SELECT query_name, COUNT(title) AS total_movies
        FROM directors
        INNER JOIN movies
        ON movies.director=directors.id
        GROUP BY directors.query_name
        `)
    },

    async q26() {
        return db.query(sql`
        SELECT query_name, title, imdb_votes
        FROM directors
        RIGHT JOIN movies
        ON movies.director=directors.id
        WHERE (query_name IS NOT NULL) AND (imdb_votes IS NOT NULL)
        ORDER BY imdb_votes ASC
        LIMIT 50
        `)
    },

    async q27() {
        return db.query(sql`
        SELECT query_name, distributor
        FROM directors
        INNER JOIN movies
        ON movies.director=directors.id
        WHERE directors.name= 'Christopher Nolan'
        `)
    },

    async q28() {
        return db.query(sql`
        SELECT name, MAX(us_gross) AS max_gross
        FROM directors
        INNER JOIN movies
        ON directors.id=movies.director
        WHERE (directors.name IS NOT NULL) AND (movies.us_gross IS NOT NULL)
        GROUP BY movies.us_gross, directors.name
        ORDER BY movies.us_gross DESC
        LIMIT 1
        `)
    },

    async q29() {
        return db.query(sql`
        SELECT d.name, COUNT(m.release_date) AS r_d
        FROM directors d
        INNER JOIN movies m 
        ON d.id=m.director
        WHERE m.release_date BETWEEN '2000-01-01' AND CURRENT_DATE
        GROUP BY d.name
        ORDER BY COUNT(*) DESC
        LIMIT 1
        `)
    },

    async q30() {
        return db.query(sql`
        SELECT name,major_genre, rotten_tomatoes_rating
        FROM directors
        INNER JOIN movies
        ON directors.id=movies.director
        WHERE  (movies.major_genre='Drama') AND (movies.rotten_tomatoes_rating >= 70)
        `)
    },

    async q31() {
        return db.query(sql`
        SELECT name
        FROM directors
        INNER JOIN movies
        ON directors.id = movies.director
        WHERE (directors.nationality = 'australiana') AND (movies.release_date <= '1995-12-12')
        `)
    },

    async q32() {
        return db.query(sql`
        SELECT d.name, m.title, m.release_date, m.mpaa_rating
        FROM directors d
        LEFT JOIN movies m
        ON m.director=d.id
        WHERE m.mpaa_rating = 'PG-13'
        ORDER BY m.release_date ASC;
        `)
    },

    async q33() {
        return db.query(sql`
        SELECT name, AVG(imdb_rating) AS rating
        FROM directors
        INNER JOIN movies
        ON directors.id=movies.director
        WHERE (directors.nationality='canadiense') AND (movies.imdb_rating IS NOT NULL)
        GROUP BY movies.imdb_rating, directors.name
        ORDER BY movies.imdb_rating DESC
        LIMIT 1 OFFSET 4;
        `)
    },

    async q34() {
        // README - Directors_Movies.34
    },

    async q35() {
        // README - Directors_Movies.35
    },
}