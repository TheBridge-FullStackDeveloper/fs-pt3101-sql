const db = require("../configs/db");
const { sql } = require("slonik");

module.exports = {
  // Your joins from directors and movies queries
  async q24() {
    // README - Directors_Movies.24
    return await db.query(sql`
        SELECT query_name, production_budget, distributor FROM directors
        JOIN movies ON directors.id = movies.director
        WHERE distributor IS NOT NULL
        `);
  },

  async q25() {
    // README - Directors_Movies.25
    return await db.query(sql`
        SELECT directors.query_name, count(*) AS movies_made FROM directors
            INNER JOIN movies
            ON directors.id = movies.director
            GROUP BY directors.query_name
        `);
  },

  async q26() {
    // README - Directors_Movies.26
    return await db.query(sql`
        SELECT query_name, title, imdb_votes FROM directors
        JOIN movies ON directors.id = movies.director
        ORDER BY imdb_votes ASC
        LIMIT 50
        `);
  },

  async q27() {
    // README - Directors_Movies.27
    return await db.query(sql`
        SELECT directors.name, movies.distributor FROM directors
        JOIN movies ON directors.id = movies.director
        WHERE directors.name = 'Christopher Nolan'
        `);
  },

  async q28() {
    // README - Directors_Movies.28
    return await db.query(sql`
    SELECT directors.name, SUM(movies.us_gross) AS total_us_gross FROM directors
    JOIN movies ON directors.id = movies.director
    GROUP BY directors.name    
    ORDER BY total_us_gross DESC
    LIMIT 1
    `);
  },

  async q29() {
    // README - Directors_Movies.29
    return await db.query(sql`
    SELECT directors.name, COUNT(*) AS total_movies_made
    FROM movies
    INNER JOIN directors
    ON directors.id = movies.director
    WHERE movies.release_date BETWEEN '2000-01-01' AND 'NOW()'
    GROUP BY directors.name
    ORDER BY total_movies_made DESC
    LIMIT 1
    `); // Faltaría mostrar la fecha
  },

  async q30() {
    // README - Directors_Movies.30
    return await db.query(sql`
    SELECT directors.name, movies.major_genre, movies.rotten_tomatoes_rating FROM directors
    JOIN movies ON directors.id = movies.director
    WHERE movies.major_genre LIKE '%drama%' AND movies.rotten_tomatoes_rating > 70
    `);
  },

  async q31() {
    // README - Directors_Movies.31
    return await db.query(sql`
    SELECT directors.name, directors.nationality, movies.release_date FROM directors
    JOIN movies ON directors.id = movies.director
    WHERE directors.nationality LIKE '%ustral%' AND EXTRACT(YEAR FROM movies.release_date) < 1995
    `);
  },

  async q32() {
    // README - Directors_Movies.32
    return await db.query(sql`
    SELECT directors.name, movies.title, movies.release_date, movies.mpaa_rating FROM directors
    JOIN movies ON directors.id = movies.director
    WHERE mpaa_rating = 'PG-13'
    `);
  },

  async q33() {
    // README - Directors_Movies.33
    return await db.query(sql`
    SELECT directors.name, directors.nationality, movies.imdb_rating FROM directors
    JOIN movies ON directors.id = movies.director
    WHERE directors.nationality LIKE '%anadiens%'
    ORDER BY movies.imdb_rating DESC
    LIMIT 1 OFFSET 4
    `);
  },
  async q33sinNull() {
    // README - Directors_Movies.33 SERÍA EL MISMO pero sin tener en cuenta los que tienen un imdb_rating NULL
    return await db.query(sql`
    SELECT directors.name, directors.nationality, movies.imdb_rating FROM directors
    JOIN movies ON directors.id = movies.director
    WHERE directors.nationality LIKE '%anadiens%' AND movies.imdb_rating IS NOT NULL
    ORDER BY movies.imdb_rating DESC
    LIMIT 1 OFFSET 4
    `);
  },

  async q34() {
    // README - Directors_Movies.34
    return await db.query(sql`
    SELECT AVG(rotten_tomatoes_rating) AS average_tomatoes_rating, AVG(imdb_rating) AS average_imdb_rating FROM movies
    WHERE creative_type = 'Contemporary Fiction' AND imdb_rating IS NOT NULL
    `); // faltaría filtrar las películas  enrte el 1990 y el 2000
  },

  async q35() {
    // README - Directors_Movies.35
    return await db.query(sql`
    SELECT directors.name, EXTRACT(YEAR FROM movies.release_date) FROM directors
    JOIN movies ON directors.id = movies.director
    WHERE movies.source = 'Based on Play' AND worldwide_gross < 500000
    `);
  },
};
