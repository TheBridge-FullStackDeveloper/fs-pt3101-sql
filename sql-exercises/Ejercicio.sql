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
-- 10. Devuelve la categoría, y el `award_year` y el premio de los Nobel cuya categoría sea Física.





