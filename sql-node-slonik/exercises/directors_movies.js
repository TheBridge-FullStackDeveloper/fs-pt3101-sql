const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
     //24. Devuelve `query_name`, `production_budget` y `distributor`. Ningún valor ha de ser NULL (Entre la información pedida en este ejercicio solo algunas distribuidoras tienen valor NULL)
    // Your joins from directors and movies queries
    async q24() {
        return await db.query(sql`SELECT directors.query_name, movies.production_budget, movies.distributor
         FROM movies 
         INNER JOIN directors
          ON directors.id = movies.id 
          WHERE movies.distributor IS NOT NULL AND   movies.production_budget IS NOT NULL`)
        // README - Directors_Movies.24
    },
    //25. Devuelve `query_name` y el total de películas que cada director ha dirigido
    async q25() {
        return await db.query(sql`SELECT directors.query_name, COUNT(movies.title) 
        FROM movies 
        INNER JOIN directors
        ON directors.id = movies.director
         GROUP BY directors.query_name`)
        // README - Directors_Movies.25
    },
   //26. Devuelve `query_name`, título e `imdb_votes` de las 50 películas menos votadas según `imdb_votes`
    async q26() {
        return await db.query(sql`SELECT directors.query_name, movies.title, movies.imdb_votes
         FROM movies
          INNER JOIN directors 
          ON directors.id = movies.id 
          ORDER BY movies.imdb_votes ASC LIMIT 50`)
        // README - Directors_Movies.26
    },
   //27. Devuelve `query_name` y distribuidora donde el director sea `Christopher Nolan`
    async q27() {
        return await db.query(sql`SELECT directors.query_name, movies.distributor 
        FROM movies 
        INNER JOIN directors
         ON directors.id = movies.id WHERE directors.query_name = 'Christopher_Nolan'`)
        // README - Directors_Movies.27
    },
   //28. Devuelve el nombre y la recaudación en Estados Unidos del director que más ha recaudado en Estados Unidos
    async q28() {
        return await db.any(sql`SELECT directors.query_name, SUM(movies.us_gross) as total_recaudado 
        FROM movies 
        INNER JOIN directors 
        ON directors.id = movies.director 
        GROUP BY directors.query_name ORDER BY total_recaudado DESC LIMIT 1;`)
        // README - Directors_Movies.28
    },
  //29. Devuelve el nombre y fecha del director que más películas haya lanzado desde el año 2000 hasta la actualidad
    async q29() {
        return await db.query(sql`SELECT directors.query_name, COUNT(movies.title) AS total
        FROM movies 
        INNER JOIN directors 
        ON directors.id = movies.director
        WHERE movies.release_date >= '2000-01-01' AND movies.release_date <= CURRENT_DATE
        GROUP BY directors.query_name
        ORDER BY total DESC
        LIMIT 1;
        `)

        // README - Directors_Movies.29
    },
   //30. Devuelve el nombre, `major_genre` y `rotten_tomatoes_rating` de todos los directores que hayan hecho películas de drama y cuya puntuación en `rotten_tomatoes_rating` sea mayor de 70
    async q30() {
        return await db.query(sql`SELECT directors.query_name, movies.major_genre, movies.rotten_tomatoes_rating
         FROM movies 
         INNER JOIN directors 
         ON directors.id = movies.director 
         WHERE movies.major_genre = 'Drama' AND rotten_tomatoes_rating > 70`)
        // README - Directors_Movies.30
    },
  //31. Devuelve el nombre de los directores australianos que hayan dirigido alguna película antes de 1995
    async q31() {
        return await db.query(sql`SELECT directors.query_name, directors.nationality, movies.release_date 
        FROM movies
         INNER JOIN directors 
         ON directors.id = movies.director
          WHERE directors.nationality = 'australiano' AND movies.release_date < '1995-01-01'`)
        // README - Directors_Movies.31
    },
    //32. Devuelve el nombre de los directores, título, fecha y `mpaa_rating` de las películas cuyo `mpaa_rating` sea `PG-13`
    async q32() {
        return await db.query(sql`SELECT directors.query_name, movies.title,movies.release_date, movies.mpaa_rating 
        FROM movies 
        INNER JOIN directors
         ON directors.id = movies.director
          WHERE movies.mpaa_rating = 'PG-13'`)
        // README - Directors_Movies.32
    },
  //33. Devuelve el quinto mejor director canadiense que haya obtenido la mejor media de `imdb_rating`
    async q33() {
        return await db.query(sql` SELECT directors.query_name, AVG(movies.imdb_rating) AS avg_rating
        FROM movies
        INNER JOIN directors
        ON movies.director = directors.id
        WHERE directors.nationality = 'canadiense' AND movies.imdb_rating IS NOT NULL
        GROUP BY directors.query_name
        ORDER BY avg_rating DESC
        LIMIT 1 OFFSET 4;
        `)
        // README - Directors_Movies.33
    },

    async q34() {
        // README - Directors_Movies.34
    },
  //35. Devuelve los nombre de los directores y las fechas solo en años de las películas basadas en juegos que hayan recaudado menos de `500000$`
    async q35() {
        return await db.query(sql`SELECT directors.query_name, EXTRACT(year FROM AGE(release_date))
        FROM movies 
        INNER JOIN directors 
        ON directors.id = movies.director
         WHERE movies.production_budget < 5E5`)
        // README - Directors_Movies.35
    },
}