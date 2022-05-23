# Ejercicio SQL - Postgres 🐘

## Antes de empezar 📚

- Recuerda tener los contenedores de `Postgres` y `Adminer` corriendo desde `docker-compose` 🐳
- Desde Adminer (`localhost:8080`) importa y ejecuta los ficheros:
  - `SQL-laureates`
  - `SQL-nobels`

## Consultas 📝

1. Devuelve toda la información de la tabla `laureates`.
✨Respuesta:
SELECT *
FROM laureates 

2. Devuelve toda la información de la tabla `nobels`.
✨Respuesta:
SELECT *
FROM nobels

### Nobels

3. Devuelve toda la información relativa al Nobel de Química.
✨Respuesta:
SELECT *
FROM nobels
WHERE category = 'Chemistry'


4. Devuelve el nombre completo del Nobel de Ciencias Económicas.
✨Respuesta:
SELECT category_fullname
FROM nobels
WHERE category = 'Economic Sciences'
LIMIT 1


5. Devuelve la motivación y la categoría del Nobel de la Paz.
✨Respuesta:
SELECT motivation, category
FROM nobels
WHERE category = 'Peace'


6. Devuelve el nombre completo y el `award_year` de los Nobel dados en el año 2019.
✨Respuesta:
SELECT category_fullname, award_year
FROM nobels
WHERE EXTRACT(YEAR FROM date_awarded) = 2019


7. Devuelve el la categoría y el `award_year` de los Nobel dados entre las fechas:

- 11 de octubre de 2019
- 12 de octubre de 2007

✨Respuesta:
SELECT category, award_year
FROM nobels
WHERE date_awarded BETWEEN '2007-10-12' AND '2019-10-11'



8. Devuelve el nombre completo, país y `award_year` de los Nobel de Química ordenados desde el más antiguo al más reciente

✨Respuesta:
SELECT category_fullname, award_year
FROM nobels
WHERE category = 'Chemistry'
ORDER BY date_awarded


=======

9. Devuelve la categoría, la motivación y el premio de los Nobel cuyo premio sea mayor de 500000$.

✨Respuesta:
SELECT category, motivation, prize_amount
FROM nobels
WHERE prize_amount > 500000


10. Devuelve la categoría, y el `award_year` y el premio de los Nobel cuya categoría sea Física.

✨Respuesta:
SELECT category, award_year
FROM nobels
WHERE category = 'Physics'


11. Devuelve la categoría y el `award_year` de los Nobel cuyo premio esté comprendido entre 100000$ y 300000$.

✨Respuesta:
SELECT category, award_year
FROM nobels
WHERE prize_amount BETWEEN 100000 AND 300000



12. Devuelve la suma de los premios Nobel de las categorías de Paz y Literatura.

✨Respuesta:
SELECT COUNT(*)
FROM nobels
WHERE category IN ('Peace', 'Literature')

13. Devuelve las 5 afiliaciones y categorías de los Nobel cuyos premios sean los menores.

✨Respuesta:
SELECT affiliations, category
FROM nobels
ORDER BY prize_amount
LIMIT 5



14. Devuelve los 7 `award_year` más recientes en los que se ha entregado algún Nobel. Los años NO deben repetirse. Tienes que devolver 7 diferentes.

✨Respuesta:
SELECT DISTINCT award_year
FROM nobels
ORDER BY award_year DESC
LIMIT 7


15. Devuelve `award_year`, `category_fullname` y `date_awarded` de los Nobel cuyo campo `date_awarded` sea `NULL`.

✨Respuesta:
SELECT award_year, category_fullname, date_awarded
FROM nobels
WHERE date_awarded IS NULL



16. Devuelve la suma de los premios de los Nobel cuyo campo `date_awarded` sea `NULL`

✨Respuesta:
SELECT COUNT(*)
FROM nobels
WHERE date_awarded IS NULL



### Laureates

17. Devuelve todos los `known_name` de la tabla `laureates`.

✨Respuesta:
SELECT known_name
FROM laureates


18. Devuelve el `known_name` y el año de nacimiento de los 10 laureados más viejos.

✨Respuesta:
SELECT known_name, birth_date
FROM laureates
ORDER BY birth_date
LIMIT 10


19. Devuelve el `full_name` y el género y la fecha de la muerte de todos los laureados que no sigan vivos.

✨Respuesta:
SELECT full_name, gender, death_date
FROM laureates
WHERE death_date IS NOT NULL


20. Devuelve el país y el `full_name` de los 10 laureados más jóvenes.

✨Respuesta:
SELECT full_name, birth_country
FROM laureates
ORDER BY birth_date DESC
LIMIT 10

21. Devuelve `known_name` y ciudad del tercer laureado más jóven.

✨Respuesta:
SELECT known_name, birth_city
FROM laureates
ORDER BY birth_date DESC
LIMIT 1 OFFSET 2


22. Devuelve todos los países SIN REPETIR cuyo laureado no haya muerto todavía.

✨Respuesta:
SELECT DISTINCT birth_country
FROM laureates
WHERE death_date IS NULL


23. Devuelve la quinta, sexta y séptima ciudad de nacimiento de los laureados ordenadas descendentemente. Si se llegasen a repetir haz que no se repitan.

✨Respuesta:
SELECT DISTINCT birth_city
FROM laureates
ORDER BY birth_city DESC
LIMIT 3 OFFSET 4

🐱‍💻🐱‍💻🐱‍💻🐱‍💻🐱‍💻

### ✨🎉

24. Devuelve el país de nacimiento, `known_name` y categoría Nobel de los premiados en Química.

✨Respuesta:
SELECT known_name, birth_country
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE category = 'Chemistry'


25. Devuelve la suma de los premios de los laureados cuyo país sean `USA` y `Japan`.

✨Respuesta:
SELECT COUNT(*)
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE birth_country IN ('USA', 'Japan')


26. Devuelve `award_year`, categoría, motivación y `known_name` de aquellos que han ganado un Nobel procedentes de India.

✨Respuesta:
SELECT award_year, category, motivation, known_name
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE birth_country = 'India'


27. Devuelve la afiliación, categoría y `known_name` de los laureados cuyo género sea `female`.

✨Respuesta:
SELECT affiliations, category, known_name
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE gender = 'female'


28. Devuelve el `known_name`, edad en la que fue premiado y el premio de los 5 laureados más jóvenes al momento de ser condecorado y cuyos premios sean los más altos.

✨Respuesta:
SELECT known_name, prize_amount, DATE_PART('year', date_awarded) - DATE_PART('year', birth_date) AS awarded_age
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
ORDER BY prize_amount DESC, DATE_PART('year', date_awarded) - DATE_PART('year', birth_date) DESC
LIMIT 5
//No están ordenados por prize D:

29. Devuelve el `known_name` y el premio de los 5 laureados más jóvenes y cuyos premios sean los más altos.

✨Respuesta:
SELECT known_name, prize_amount
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
ORDER BY birth_date DESC, prize_amount DESC


30. Devuelve el nombre completo, la motivación y el premio de aquellos laureados que no tienen ninguna afiliación.

✨Respuesta:
SELECT full_name, prize_amount, motivation
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE affiliations IS NOT NULL


31. Devuelve el nombre completo, fecha de muerte y afiliación de los laureados cuyo nombre no comienza con la letra 'A'.

✨Respuesta:
SELECT full_name, death_date, affiliations
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE full_name NOT LIKE 'A%'


32. Devuelve el `known_name`, fecha de muerte, categoría y total de años que hace que murieron aquellos que ganaron el Nobel de Química.

✨Respuesta:
SELECT known_name, death_date, category, DATE_PART('year', CURRENT_DATE) - DATE_PART('year', death_date) AS years_after_death
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE category = 'Chemistry'


33. Devuelve `known_name`, `category_fullname` y edad actual de los 5 Nobel cuyo `known_name`sean los más cortos, ordenados desde el más joven hasta el más viejo.

✨Respuesta:
SELECT known_name, category_fullname, DATE_PART('year', CURRENT_DATE) - DATE_PART('year', birth_date) AS age
FROM nobels
JOIN laureates
   ON nobels.laureate_id = laureates.id
ORDER BY LENGTH(known_name), (DATE_PART('year', CURRENT_DATE) - DATE_PART('year', birth_date))
LIMIT 5
//no ordena por edad D:

34. Devuelve `known_name`, la edad actual solo en años, la edad de cuando recibió el Nobel y la categoría del Nobel de aquellos laureados que tengan más de 80 años y aún sigan vivos.

✨Respuesta:
SELECT 
known_name, 
category, 
DATE_PART('year', CURRENT_DATE) - DATE_PART('year', birth_date) AS age,
DATE_PART('year', date_awarded) - DATE_PART('year', birth_date) AS age_when_awarded
FROM nobels
JOIN laureates
  ON nobels.laureate_id = laureates.id
WHERE death_date IS NULL AND (DATE_PART('year', CURRENT_DATE) - DATE_PART('year', birth_date)) > 80


35. Devuelve el nombre de la categoría y la suma total de los premios recibidos por categoría ordenados alfabéticamente.

✨Respuesta:
SELECT  category, count(*) FILTER (WHERE date_awarded IS NOT NULL)
FROM nobels
GROUP BY category