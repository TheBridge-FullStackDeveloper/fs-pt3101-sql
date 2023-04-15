-- 24. Devuelve el país de nacimiento, `known_name` y categoría Nobel de los premiados en Química.

SELECT birth_country, known_name, category 
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE category_fullname LIKE 'The Nobel Prize in Chemistry';

-- 25. Devuelve la suma de los premios de los laureados cuyo país sean `USA` y `Japan`.

SELECT SUM(prize_amount)
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE birth_country IN ('USA', 'Japan');

-- 26. Devuelve `award_year`, categoría, motivación y `known_name` de aquellos que han ganado un Nobel procedentes de India.

SELECT award_year, category, motivation, known_name
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE birth_country LIKE 'India';

-- 27. Devuelve la afiliación, categoría y `known_name` de los laureados cuyo género sea `female`.

SELECT affiliations, category, known_name
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE gender LIKE 'female';

-- 28. Devuelve el `known_name`, edad en la que fue premiado y el premio de los 5 laureados más jóvenes al momento de ser condecorado y cuyos premios sean los más altos.

SELECT known_name, AGE(date_awarded, birth_date) AS "AGE", prize_amount
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
ORDER BY prize_amount DESC,
AGE(date_awarded, birth_date) ASC
FETCH FIRST 5 ROWS ONLY;

-- 29. Devuelve el `known_name` y el premio de los 5 laureados más jóvenes y cuyos premios sean los más altos.

SELECT known_name, prize_amount
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
ORDER BY birth_date DESC,
prize_amount DESC
FETCH FIRST 5 ROWS ONLY;

-- 30. Devuelve el nombre completo, la motivación y el premio de aquellos laureados que no tienen ninguna afiliación.

SELECT full_name, motivation, prize_amount
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE affiliations IS NULL;

-- 31. Devuelve el nombre completo, fecha de muerte y afiliación de los laureados cuyo nombre no comienza con la letra 'A'.

SELECT full_name, death_date, affiliations
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE full_name NOT LIKE 'A%';

-- 32. Devuelve el `known_name`, fecha de muerte, categoría y total de años que hace que murieron aquellos que ganaron el Nobel de Química.

SELECT known_name, death_date, category, AGE(death_date) AS "death_year"
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE category_fullname LIKE 'The Nobel Prize in Chemistry' AND death_date IS NOT NULL;

-- 33. Devuelve `known_name`, `category_fullname` y edad actual de los 5 Nobel cuyo `known_name`sean los más cortos, ordenados desde el más joven hasta el más viejo.

SELECT known_name, category_fullname, AGE(birth_date) AS "Actual_Age"
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
ORDER BY LENGTH(known_name) ASC,
birth_date DESC
FETCH FIRST 5 ROWS ONLY;

-- 34. Devuelve `known_name`, la edad actual solo en años, la edad de cuando recibió el Nobel y la categoría del Nobel de aquellos laureados que tengan más de 80 años y aún sigan vivos.

SELECT known_name, DATE_PART ('year', AGE(birth_date)) AS "Actual_Age", DATE_PART ('year', AGE(date_awarded, birth_date)) AS "awared_Age", category
FROM laureates INNER JOIN nobels ON laureates.id = nobels.laureate_id
WHERE DATE_PART ('year', AGE(birth_date)) > 80 AND death_date IS NULL;

-- 35. Devuelve el nombre de la categoría y la suma total de los premios recibidos por categoría ordenados alfabéticamente.

SELECT category, count(*) AS "quantity"
FROM nobels
GROUP BY category
HAVING count(*) >= 1
ORDER BY category ASC;
