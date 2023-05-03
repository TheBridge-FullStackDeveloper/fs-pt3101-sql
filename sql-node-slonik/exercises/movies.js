const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    //9. Devuelve el título de todas las películas cuyo contenido no sea null
    async q9() {
        return await db.query(sql`SELECT title FROM movies WHERE title IS NOT NULL `)
        // README - Movies.9
    },
    //10. Devuelve el título y el `mpaa_rating` de todas las películas cuya valoración `mpaa` no sea null
    async q10() {
        return await db.query(sql`SELECT title, mpaa_rating FROM movies WHERE mpaa_rating IS NOT NULL`)
        // README - Movies.10
    },
   //11. Devuelve el título, `production_budget` y distribuidora de todas aquellas películas cuyos costes (`production_budget`) hayan sido inferiores a `500000$`
    async q11() {
        return await db.query(sql`SELECT title, production_budget, distributor FROM movies WHERE production_budget < 5E5`)
        // README - Movies.11
    },
   //12. Devuelve el título, `major_genre` y `production_budget` de las 10 películas más costosas
    async q12() {
        return await db.query(sql`SELECT title, major_genre, production_budget FROM movies  ORDER BY production_budget  DESC LIMIT 10  `)
        // README - Movies.12
    },
   //13. Devuelve el título y el orígen (`source`) de todas las películas cuyo `source` sea `Remake`
    async q13() {
        return await db.query(sql`SELECT title, source FROM movies WHERE source = 'Remake'`)
        // README - Movies.13
    },
   //14. Devuelve el título, la distribuidora y el rating imdb de todas las películas cuyo `imdb_rating` no sea null
    async q14() {
        return await db.query(sql`SELECT title,distributor, imdb_rating FROM movies WHERE imdb_rating IS NOT NULL`)
        // README - Movies.14
    },
   //15. Devuelve el título y `rotten_tomatoes_rating` de las 100 películas menor valoradas según este campo.
    async q15() {
        return await db.query(sql`SELECT title, rotten_tomatoes_rating FROM movies ORDER BY rotten_tomatoes_rating ASC LIMIT 100`)
        // README - Movies.15
    },
   //16. Devuelve el título, `major_genre`, imdb_rating e imdb_votes de las 20 películas mejor valoradas y a la vez con más votos de todas
    async q16() {
        return await db.query(sql`SELECT title, major_genre, imdb_rating, imdb_votes FROM movies WHERE imdb_rating IS NOT NULL ORDER BY imdb_rating DESC, imdb_votes DESC LIMIT 20 `)
        // README - Movies.16
    },
   //17. Devuelve la suma del campo `production_budget` cuyo `mpaa_rating` sea `Not Rated` y el campo título no sea null
    async q17() {
        return await db.query(sql`SELECT SUM(production_budget) AS suma FROM movies WHERE mpaa_rating = 'Not Rated' AND title IS NOT NULL `)
        // README - Movies.17
    },
   //18. Devuelve el título y la fecha de todas aquellas películas que serán lanzadas en el futuro
    async q18() {
        return await db.query(sql`SELECT title,DATE(release_date) FROM movies WHERE release_date > NOW()`)
        // README - Movies.18
    },
   //19. Devuelve el título, `us_gross` y fecha de todas aquellas películas lanzadas entre 1950 y 1980
    async q19() {
        return await db.query(sql`SELECT title, us_gross, release_date FROM movies WHERE release_date BETWEEN '1950-01-01' AND '1980-12-31'`)
        // README - Movies.19
    },
    //20. Devuelve el título, `us_gross` y `worldwide_gross` de todas aquellas películas donde `us_gross` o `worldwide_gross` sea 0
    async q20() {
        return await db.query(sql`SELECT title,us_gross,worldwide_gross FROM movies WHERE us_gross = 0 OR  worldwide_gross = 0 `)
        // README - Movies.20
    },
   //21. Devuelve el título y el `us_gross` de las 50 películas con la recaudación en Estados Unidos (`us_gross`) más pobre
    async q21() {
        return await db.query(sql`SELECT title,us_gross FROM movies ORDER BY us_gross ASC LIMIT 50 `)
        // README - Movies.21
    },
   //22. Devuelve el título y `source` de aquellas películas cuyo título empiece por `F`
    async q22() {
        return await db.query(sql`SELECT title, source FROM movies WHERE title LIKE  'F%'`)
        // README - Movies.22
    },
   //23. Devuelve distribuidor, `production_budget`, `creative_type`, `major_genre` de aquellas películas cuyo `production_budget` es superior a `10000000` y el distribuidor es `Sony Pictures`

    async q23() {
        return await db.query(sql`SELECT distributor, production_budget, creative_type,major_genre FROM movies WHERE production_budget > 1E7 AND distributor = 'Sony Pictures'`)
        // README - Movies.23
    },
}