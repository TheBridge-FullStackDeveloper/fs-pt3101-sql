  

-- 2. Devuelve toda la información de la tabla `nobels`.

SELECT id, laureate_id, award_year, category, category_fullname,
  date_awarded, prize_status, motivation,
  prize_amount, affiliations
  FROM nobels;

-- 3. Devuelve toda la información relativa al Nobel de Química.

SELECT id, laureate_id, award_year, category, category_fullname,
  date_awarded, prize_status, motivation,
  prize_amount, affiliations
  FROM nobels
  WHERE category_fullname LIKE 'The Nobel Prize in Chemistry'; 

-- 4. Devuelve el nombre completo del Nobel de Ciencias Económicas.

SELECT category_fullname
FROM nobels
WHERE category_fullname LIKE '%Riksbank%';   

-- 5. Devuelve la motivación y la categoría del Nobel de la Paz.

SELECT category, motivation 
FROM nobels
WHERE category_fullname LIKE 'The Nobel Peace Prize';

-- 6. Devuelve el nombre completo y el `award_year` de los Nobel dados en el año 2019.

SELECT category_fullname, award_year
FROM nobels
WHERE award_year = 2019;

-- 7. Devuelve el la categoría y el `award_year` de los Nobel dados entre las fechas:
-- 11 de octubre de 2019
-- 12 de octubre de 2007

SELECT category, award_year
FROM nobels
WHERE date_awarded BETWEEN '2007-10-11' AND '2019-10-11';

-- 8. Devuelve el nombre completo y `award_year` de los Nobel de Química ordenados desde el más antiguo al más reciente => No existe país en la tabla, de requerir país habría que hacer join (corregir)

SELECT category_fullname, award_year
FROM nobels
WHERE category_fullname LIKE 'The Nobel Prize in Chemistry'
ORDER BY award_year ASC;

-- 9. Devuelve la categoría, la motivación y el premio de los Nobel cuyo premio sea mayor de 500000$.

SELECT category, motivation, prize_amount
FROM nobels
WHERE prize_amount > 500000;

-- 10. Devuelve la categoría, y el `award_year` y el premio de los Nobel cuya categoría sea Física.

SELECT category, award_year, prize_amount
FROM nobels
WHERE category LIKE 'Physics';

-- 11. Devuelve la categoría y el `award_year` de los Nobel cuyo premio esté comprendido entre 100000$ y 300000$.

SELECT category, award_year
FROM nobels
WHERE prize_amount BETWEEN 100000 AND 300000;

-- 12. Devuelve la suma de los premios Nobel de las categorías de Paz y Literatura.

SELECT Count(category)
FROM nobels
WHERE category IN ('Peace', 'Literature');

-- 13. Devuelve las 5 afiliaciones y categorías de los Nobel cuyos premios sean los menores.

SELECT category, affiliations 
FROM nobels
ORDER BY prize_amount ASC
FETCH FIRST 5 ROWS ONLY;

-- 14. Devuelve los 7 `award_year` más recientes en los que se ha entregado algún Nobel. Los años NO deben repetirse. 
-- Tienes que devolver 7 diferentes.

SELECT DISTINCT award_year
FROM nobels
ORDER BY award_year DESC
FETCH FIRST 7 ROWS ONLY;

-- 15. Devuelve `award_year`, `category_fullname` y `date_awarded` de los Nobel cuyo campo `date_awarded` sea `NULL`.

SELECT award_year, category_fullname, date_awarded
FROM nobels
WHERE date_awarded is NULL;

-- 16. Devuelve la suma de los premios de los Nobel cuyo campo `date_awarded` sea `NULL`

SELECT SUM (CASE WHEN date_awarded IS NULL THEN 1 ELSE 0 END)
FROM nobels
WHERE date_awarded is NULL;

