
-- ##nobels
--1. Devuelve toda la información de la tabla laureates.
SELECT * 
FROM "laureates";

--2. Devuelve toda la información de la tabla nobels
SELECT * 
FROM "nobels";

--3. Devuelve toda la información relativa al Nobel de Química.
SELECT * 
FROM "nobels" 
WHERE category = 'Chemistry';

--4. Devuelve el nombre completo del Nobel de Ciencias Económicas.
SELECT category_fullname 
FROM "nobels" 
WHERE category = 'Economic Sciences';

--5. Devuelve la motivación y la categoría del Nobel de la Paz.
SELECT category, motivation 
FROM "nobels" 
where category = 'Peace';

--6. Devuelve el nombre completo y el `award_year` de los Nobel dados en el año 2019.
SELECT award_year,category_fullname 
FROM "nobels" 
WHERE award_year = 2019;

--7. Devuelve el la categoría y el `award_year` de los Nobel dados entre las fechas: 
-- - 12 de octubre de 2007
-- - 11 de octubre de 2019
SELECT award_year,category_fullname 
FROM "nobels" 
WHERE award_year  
BETWEEN 2007 and 2019;

-- 8. Devuelve el nombre completo y `award_year` de los Nobel de Química ordenados desde el más antiguo al más reciente => No existe país en la tabla, de requerir país habría que hacer join (corregir)
SELECT award_year , category_fullname 
FROM "nobels" 
WHERE category = 'Chemistry'
ORDER BY award_year ASC;

-- 9. Devuelve la categoría, la motivación y el premio de los Nobel cuyo premio sea mayor de 500000$.
SELECT category,motivation
FROM "nobels"
WHERE prize_amount > 500000;

-- 10. Devuelve la categoría, y el `award_year` y el premio de los Nobel cuya categoría sea Física.
SELECT category, award_year, prize_amount 
FROM "nobels" 
WHERE category = 'Physics';
-- 11. Devuelve la categoría y el `award_year` de los Nobel cuyo premio esté comprendido entre 100000$ y 300000$.
SELECT category, award_year 
FROM "nobels" 
WHERE prize_amount 
BETWEEN 100000 and 300000;

-- 12. Devuelve la suma de los premios Nobel de las categorías de Paz y Literatura.
SELECT SUM(prize_amount) AS sum_pize_amount
FROM "nobels"
WHERE category IN ('Peace','Literature')

-- 13. Devuelve las 5 afiliaciones y categorías de los Nobel cuyos premios sean los menores.
SELECT affiliations, category 
FROM "nobels"
ORDER BY prize_amount ASC 
LIMIT 5;
-- 14. Devuelve los 7 `award_year` más recientes en los que se ha entregado algún Nobel. Los años NO deben repetirse. Tienes que devolver 7 diferentes.
SELECT DISTINCT award_year 
FROM "nobels"
WHERE prize_status = 'received'
ORDER BY award_year DESC 
LIMIT 7;

-- 15. Devuelve `award_year`, `category_fullname` y `date_awarded` de los Nobel cuyo campo `date_awarded` sea `NULL`.
SELECT award_year,category_fullname,date_awarded 
FROM "nobels"
WHERE date_awarded IS NULL;
-- 16. Devuelve la suma de los premios de los Nobel cuyo campo `date_awarded` sea `NULL`
SELECT SUM(prize_amount) AS sum_prize_amount 
FROM "nobels"
WHERE date_awarded IS NULL;

-- ### Laureates

-- 17. Devuelve todos los `known_name` de la tabla `laureates`.
SELECT known_name FROM "laureates";

-- 18. Devuelve el `known_name` y el año de nacimiento de los 10 laureados más viejos.
SELECT known_name , birth_date  
FROM "laureates"
ORDER BY birth_date ASC
LIMIT 10;

-- 19. Devuelve el `full_name` y el género y la fecha de la muerte de todos los laureados que no sigan vivos.
SELECT full_name, gender, death_date 
FROM "laureates"
WHERE death_date IS NOT NULL;

-- 20. Devuelve el país y el `full_name` de los 10 laureados más jóvenes.
SELECT  full_name, birth_country
FROM "laureates" 
ORDER BY birth_date DESC
LIMIT 10;

-- 21. Devuelve `known_name` y ciudad del tercer laureado más jóven.
SELECT  full_name, birth_country, birth_date
FROM "laureates" 
ORDER BY birth_date DESC
LIMIT 10;

-- 22. Devuelve todos los países SIN REPETIR cuyo laureado no haya muerto todavía.
SELECT DISTINCT birth_country 
FROM "laureates"
WHERE death_date IS NULL;

-- 23. Devuelve la quinta, sexta y séptima ciudad de nacimiento de los laureados ordenadas descendentemente. Si se llegasen a repetir haz que no se repitan.
SELECT DISTINCT (birth_city)
FROM "laureates"
ORDER BY birth_city DESC LIMIT 3 OFFSET 7

-- 24. Devuelve el país de nacimiento, `known_name` y categoría Nobel de los premiados en Química.
SELECT laureates.birth_country , laureates.known_name , nobels.category 
FROM laureates
INNER JOIN nobels
ON laureates.id = nobels.laureate_id
WHERE nobels.category = 'Chemistry'

-- 25. Devuelve la suma de los premios de los laureados cuyo país sean `USA` y `Japan`.
SELECT SUM(nobels.prize_amount) AS sum_prize_amount 
FROM nobels
INNER JOIN laureates
ON nobels.laureate_id = laureates.id
WHERE laureates.birth_country IN ( 'USA', 'JAPAN')

-- 26. Devuelve `award_year`, categoría, motivación y `known_name` de aquellos que han ganado un Nobel procedentes de India.
SELECT nobels.award_year, nobels.category , nobels.motivation, laureates.known_name 
FROM nobels
INNER JOIN laureates
ON nobels.laureates_id = laureates.id
WHERE laureates.birth_country = 'India'

-- 27. Devuelve la afiliación, categoría y `known_name` de los laureados cuyo género sea `female`.
SELECT nobels.affiliations, nobels.category, laureates.known_name 
FROM nobels
INNER JOIN laureates
ON nobels.laureate_id = laureate.id
WHERE laureate.gender = 'female'

-- 28. Devuelve el `known_name`, edad en la que fue premiado y el premio de los 5 laureados más jóvenes al momento de ser condecorado y cuyos premios sean los más altos.
SELECT laureates.known_name, nobels.category_fullname, AGE(nobels.date_awarded, laureates.birth_date) AS age
FROM nobels
INNER JOIN laureates
ON nobels.laureate_id = laureates.id
ORDER BY nobels.prize_amount DESC AGE(nobels.date_awarded, laureates.birth_date) ASC LIMIT 5

-- 29. Devuelve el `known_name` y el premio de los 5 laureados más jóvenes y cuyos premios sean los más altos.
SELECT laureates.known_name, nobels.prize_amount 
FROM nobels
INNER JOIN laureates
ON nobels.laureate_id = laureates.id
ORDER BY nobels.prize_amount, AGE(laureates.birth_date) LIMIT 5


-- 30. Devuelve el nombre completo, la motivación y el premio de aquellos laureados que no tienen ninguna afiliación
SELECT known_name, motivation,prize_amount 
FROM nobels
INNER JOIN laureates
ON nobel.laureate_id = laureates.id
WHERE laureates.affiliations IS NULL

-- 31. Devuelve el nombre completo, fecha de muerte y afiliación de los laureados cuyo nombre no comienza con la letra 'A'.
SELECT full_name, death_date, affiliations
FROM laureates
INNER JOIN nobels
ON laureates.id = nobels.laureate_id
WHERE laureates.full_name NOT LIKE 'A%'

-- 32. Devuelve el `known_name`, fecha de muerte, categoría y total de años que hace que murieron aquellos que ganaron el Nobel de Química.
SELECT known_name,death_date,category, AGE(death_date) AS death 
FROM nobels
INNER JOIN laureates
ON laureates.id = nobels.laureate_id
WHERE nobels.category = 'Chemistry'

-- 33. Devuelve `known_name`, `category_fullname` y edad actual de los 5 Nobel cuyo `known_name`sean los más cortos, ordenados desde el más joven hasta el más viejo.
SELECT known_name, category_fullname, AGE(CURRENT_DATE ,birth_date) 
FROM nobels
INNER JOIN laureates
ON laureates.id = nobels.laureate_id
ORDER BY LENGTH (laureates.known_name) ASC, AGE(laureates.birth_date) ASC

-- 34. Devuelve `known_name`, la edad actual solo en años, la edad de cuando recibió el Nobel y la categoría del Nobel de aquellos laureados que tengan más de 80 años y aún sigan vivos.
