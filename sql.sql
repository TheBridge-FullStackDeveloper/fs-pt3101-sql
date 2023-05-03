-- Devuelve toda la información de la tabla `laureates`.

SELECT *  FROM laureates;

-- Devuelve toda la información de la tabla `nobels`.

SELECT *  FROM nobels;

-- Devuelve toda la información relativa al Nobel de Química.

SELECT * FROM nobels WHERE category LIKE 'Chemistry';

-- Devuelve el nombre completo del Nobel de Ciencias Económicas.

SELECT category_fullname
FROM nobels
WHERE category
LIKE 'Economic Sciences';

-- Devuelve la motivación y la categoría del Nobel de la Paz.

SELECT motivation, category
FROM nobels
WHERE category 
LIKE 'Peace';

-- Devuelve el nombre completo y el `award_year` de los Nobel dados en el año 2019.

SELECT category_fullname
FROM nobels
WHERE award_year = 2019;

-- Devuelve el la categoría y el `award_year` de los Nobel dados entre las fechas:
-- 11 de octubre de 2019
-- 12 de octubre de 2007

SELECT category
FROM nobels 
WHERE award_year
BETWEEN 2007 AND 2019;

-- Devuelve el nombre completo y `award_year` de los Nobel de Química ordenados desde el más antiguo al más reciente => No existe país en la tabla, de requerir país habría que hacer join (corregir)

SELECT category_fullname, award_year
FROM nobels
WHERE category = 'Chemistry'
ORDER BY award_year ASC;

-- Devuelve la categoría, la motivación y el premio de los Nobel cuyo premio sea mayor de 500000$.

SELECT category, motivation, prize_amount
FROM nobels
WHERE prize_amount > 500000;

-- Devuelve la categoría, y el `award_year` y el premio de los Nobel cuya categoría sea Física.

SELECT category, award_year, prize_amount
FROM nobels
WHERE category = 'Physics';

-- Devuelve la categoría y el `award_year` de los Nobel cuyo premio esté comprendido entre 100000$ y 300000$.

SELECT category, award_year
FROM nobels
WHERE prize_amount BETWEEN 100000 AND 300000;

-- Devuelve la suma de los premios Nobel de las categorías de Paz y Literatura.

SELECT SUM(prize_amount) as total_Peace_Literature
FROM nobels
WHERE category IN ('Peace', 'Literature');

-- Devuelve las 5 afiliaciones y categorías de los Nobel cuyos premios sean los menores.

SELECT affiliations, category
FROM nobels
ORDER BY prize_amount ASC
LIMIT 5;

-- Devuelve los 7 `award_year` más recientes en los que se ha entregado algún Nobel. Los años NO deben repetirse. Tienes que devolver 7 diferentes.

SELECT DISTINCT award_year
FROM nobels
ORDER BY award_year DESC
LIMIT 7;

--Devuelve `award_year`, `category_fullname` y `date_awarded` de los Nobel cuyo campo `date_awarded` sea `NULL`.

SELECT award_year, category_fullname, date_awarded
FROM nobels
WHERE date_awarded IS NULL;

-- Devuelve la suma de los premios de los Nobel cuyo campo `date_awarded` sea `NULL`

SELECT SUM(prize_amount)
FROM nobels 
WHERE date_awarded IS NULL;

-- Devuelve todos los `known_name` de la tabla `laureates`.

SELECT known_name
FROM laureates

 --Devuelve el `known_name` y el año de nacimiento de los 10 laureados más viejos.

SELECT known_name, birth_date
FROM laureates 
ORDER BY birth_date ASC
LIMIT 10;

-- Devuelve el `full_name` y el género y la fecha de la muerte de todos los laureados que no sigan vivos.

SELECT full_name, gender, death_date
FROM laureates
WHERE death_date IS NOT NULL;

-- Devuelve el país y el `full_name` de los 10 laureados más jóvenes.

SELECT birth_city, full_name
FROM laureates 
ORDER BY birth_date DESC
LIMIT 10;


