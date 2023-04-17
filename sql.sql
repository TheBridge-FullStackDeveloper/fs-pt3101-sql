-- Devuelve toda la información de la tabla `laureates`.

SELECT *  FROM laureates;

-- Devuelve toda la información de la tabla `nobels`.

SELECT *  FROM nobels;

-- Devuelve toda la información relativa al Nobel de Química.

SELECT * FROM nobels WHERE category LIKE 'Chemistry';

-- Devuelve el nombre completo del Nobel de Ciencias Económicas.

SELECT category_fullname FROM nobels
WHERE category LIKE 'Economic Sciences';

-- Devuelve la motivación y la categoría del Nobel de la Paz.

SELECT motivation, category FROM nobels
WHERE category LIKE 'Peace';

-- Devuelve el nombre completo y el `award_year` de los Nobel dados en el año 2019.

SELECT category_fullname FROM nobels
WHERE award_year = 2019;

-- Devuelve el la categoría y el `award_year` de los Nobel dados entre las fechas:
-- 11 de octubre de 2019
-- 12 de octubre de 2007

SELECT category FROM nobels 
WHERE award_year BETWEEN 2007 AND 2019;

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


