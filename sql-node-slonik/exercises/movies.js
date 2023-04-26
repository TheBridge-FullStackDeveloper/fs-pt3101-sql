const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    async q9() {
        const query = await db.query(sql`
            SELECT title FROM movies
            WHERE title IS NOT NULL;
        `);

        return query.rows;
    },

    async q10() {
        const query = await db.query(sql`
            SELECT title, mpaa_rating FROM movies
            WHERE mpaa_rating IS NOT NULL;
        `);

        return query.rows;
    },

    async q11() {
        const query = await db.query(sql`
            SELECT title, production_budget, distributor FROM movies
            WHERE production_budget < 500000;
        `);

        return query.rows;
    },

    async q12() {
        const query = await db.query(sql`
            SELECT title, major_genre, production_budget FROM movies
            WHERE production_budget IS NOT NULL
            ORDER BY production_budget DESC
            LIMIT 10;
        `);

        return query.rows;
    },

    async q13() {
        const query = await db.query(sql`
            SELECT title, source FROM movies
            WHERE source = 'Remake';
        `);

        return query.rows;
    },

    async q14() {
        const query = await db.query(sql`
            SELECT title, distributor, imdb_rating FROM movies
            WHERE imdb_rating IS NOT NULL;
        `);

        return query.rows;
    },

    async q15() {
        const query = await db.query(sql`
            SELECT title, rotten_tomatoes_rating FROM movies
            WHERE rotten_tomatoes_rating IS NOT NULL
            ORDER BY rotten_tomatoes_rating DESC
            LIMIT 100;
        `);

        return query.rows;
    },

    async q16() {
        const query = await db.query(sql`
            SELECT title, major_genre, imdb_rating, imdb_votes FROM movies
            WHERE imdb_rating IS NOT NULL
            ORDER BY imdb_rating DESC, imdb_votes DESC
            LIMIT 20;
        `);

        return query.rows;
    },

    async q17() {
        const query = await db.query(sql`
            SELECT SUM(production_budget) FROM movies
            WHERE title IS NOT NULL AND mpaa_rating = 'Not Rated';
        `);

        return query.rows;
    },

    async q18() {
        const query = await db.query(sql`
            SELECT title, release_date FROM movies
            WHERE release_date > CURRENT_DATE;
        `);

        return query.rows;
    },

    async q19() {
        const query = await db.query(sql`
            SELECT title, us_gross, release_date FROM movies
            WHERE DATE_PART('year', release_date) BETWEEN 1950 AND 1980;
        `);

        return query.rows;
    },

    async q20() {
        const query = await db.query(sql`
            SELECT title, us_gross, worldwide_gross FROM movies
            WHERE us_gross = 0 OR worldwide_gross = 0;
        `);

        return query.rows;
    },

    async q21() {
        const query = await db.query(sql`
            SELECT title, us_gross FROM movies
            ORDER BY us_gross ASC
            LIMIT 50;
        `);

        return query.rows;
    },

    async q22() {
        const query = await db.query(sql`
            SELECT title, source FROM movies
            WHERE title LIKE 'F%';
        `);

        return query.rows;
    },

    async q23() {
        const query = await db.query(sql`
            SELECT distributor, production_budget, creative_type, major_genre FROM movies
            WHERE production_budget > 10000000 AND distributor = 'Sony Pictures'; 
        `);

        return query.rows;
    },
}