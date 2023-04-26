const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your joins from directors and movies queries
    async q24() {
        const query = await db.query(sql`
            SELECT query_name, production_budget, distributor
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE distributor IS NOT NULL;
        `);

        return query.rows;
    },

    async q25() {
        const query = await db.query(sql`
            SELECT query_name, COUNT(title)
            FROM directors INNER JOIN movies ON directors.id = movies.director
            GROUP BY query_name;
        `);

        return query.rows;
    },

    async q26() {
        const query = await db.query(sql`
            SELECT query_name, title, imdb_votes
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE imdb_votes IS NOT NULL
            ORDER BY imdb_votes ASC
            LIMIT 50;
        `);

        return query.rows;
    },

    async q27() {
        const query = await db.query(sql`
            SELECT query_name, distributor
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE name = 'Christopher Nolan';
        `);

        return query.rows;
    },

    async q28() {
        const query = await db.query(sql`
            SELECT name, SUM(us_gross)
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE us_gross IS NOT NULL
            GROUP BY name
            ORDER BY SUM(us_gross) DESC
            LIMIT 1;
        `);

        return query.rows;
    },

    async q29() {
        const query = await db.query(sql`
            SELECT name, COUNT(title)
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE release_date BETWEEN '2000-01-01' AND CURRENT_DATE
            GROUP BY name
            ORDER BY COUNT(title) DESC
            LIMIT 1;
        `);

        return query.rows;
    },

    async q30() {
        const query = await db.query(sql`
            SELECT name, major_genre, title, rotten_tomatoes_rating
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE major_genre = 'Drama' AND rotten_tomatoes_rating > 70;
        `);

        return query.rows;
    },

    async q31() {
        const query = await db.query(sql`
            SELECT name
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE nationality LIKE '%australian%' AND release_date <= '1995-01-01';
        `);

        return query.rows;
    },

    async q32() {
        const query = await db.query(sql`
            SELECT name, title, release_date, mpaa_rating
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE mpaa_rating = 'PG-13';
        `);

        return query.rows;
    },

    async q33() {
        const query = await db.query(sql`
            SELECT name, AVG(imdb_rating) AS average
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE nationality LIKE '%canadiense%' AND imdb_rating IS NOT NULL
            GROUP BY name
            ORDER BY average DESC
            LIMIT 1
            OFFSET 4;
        `);

        return query.rows;
    },

    async q34() {
        const query = await db.query(sql`
            SELECT creative_type, AVG(imdb_rating) AS avg_imdb, AVG(rotten_tomatoes_rating) AS avg_rt
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE imdb_rating IS NOT NULL AND rotten_tomatoes_rating IS NOT NULL AND release_date BETWEEN '1990-01-01' AND '2000-12-31'
            GROUP BY creative_type
        `);

        return query.rows;
    },

    async q35() {
        const query = await db.query(sql`
            SELECT name, title, DATE_PART('year', release_date) AS year
            FROM directors INNER JOIN movies ON directors.id = movies.director
            WHERE source = 'Based on Game' AND worldwide_gross < 5000000;
        `);

        return query.rows;
    },
}