# Ejercicio SQL - Postgres 🐘

## Antes de empezar 📚

- Recuerda tener los contenedores de `Postgres` y `Adminer` corriendo desde `docker-compose` 🐳
- Desde Adminer (`localhost:8080`) importa y ejecuta los ficheros:
  - `SQL-laureates`
  - `SQL-nobels`

## Consultas 📝

1. Devuelve toda la información de la tabla `laureates`.

SELECT * FROM laureates

2. Devuelve toda la información de la tabla `nobels`.

SELECT * FROM nobels

### Nobels

3. Devuelve toda la información relativa al Nobel de Química.

SELECT * FROM nobels
WHERE category LIKE 'Chemistry'

4. Devuelve el nombre completo del Nobel de Ciencias Económicas.

SELECT full_name, category FROM laureates
INNER JOIN nobels
ON laureates.id = laureate_id
WHERE category LIKE 'Economic%'

5. Devuelve la motivación y la categoría del Nobel de la Paz.

SELECT motivation, category FROM nobels
WHERE category LIKE 'Peace'

6. Devuelve el nombre completo y el `award_year` de los Nobel dados en el año 2019.

SELECT full_name, award_year FROM laureates
INNER JOIN nobels
ON laureates.id = laureate_id
WHERE award_year = 2019


7. Devuelve el la categoría y el `award_year` de los Nobel dados entre las fechas:

- 11 de octubre de 2019
- 12 de octubre de 2007

SELECT category, award_year, date_awarded FROM laureates
INNER JOIN nobels
ON laureates.id = laureate_id
WHERE date_awarded BETWEEN '2007-10-12 00:00:00' AND '2019-10-11 00:00:00'
ORDER BY award_year

8. Devuelve el nombre completo, país y `award_year` de los Nobel de Química ordenados desde el más antiguo al más reciente

SELECT full_name, birth_country, award_year, category FROM laureates
INNER JOIN nobels
ON laureates.id = laureate_id
WHERE category = 'Chemistry'
ORDER BY award_year DESC

9. Devuelve la categoría, la motivación y el premio de los Nobel cuyo premio sea mayor de 500000$.

SELECT category, motivation, prize_amount FROM nobels
WHERE prize_amount >'500000'
ORDER BY prize_amount ASC


10. Devuelve la categoría, y el `award_year` y el premio de los Nobel cuya categoría sea Física.

SELECT category, award_year FROM nobels
WHERE category = 'Physics'

11. Devuelve la categoría y el `award_year` de los Nobel cuyo premio esté comprendido entre 100000$ y 300000$.

SELECT category, award_year, prize_amount  FROM nobels
WHERE prize_amount BETWEEN '100000' AND '300000'
ORDER BY prize_amount 


12. Devuelve la suma de los premios Nobel de las categorías de Paz y Literatura.

SELECT COUNT(*) FROM nobels
WHERE category LIKE 'Peace' OR category LIKE 'Literature'


13. Devuelve las 5 afiliaciones y categorías de los Nobel cuyos premios sean los menores.

SELECT affiliations, prize_amount FROM nobels
ORDER BY prize_amount
LIMIT 5

14. Devuelve los 7 `award_year` más recientes en los que se ha entregado algún Nobel. Los años NO deben repetirse. Tienes que devolver 7 diferentes.

SELECT DISTINCT award_year FROM nobels
ORDER by award_year DESC
LIMIT 7


15. Devuelve `award_year`, `category_fullname` y `date_awarded` de los Nobel cuyo campo `date_awarded` sea `NULL`.

SELECT award_year, category_fullname, date_awarded FROM nobels
WHERE date_awarded IS NULL


16. Devuelve la suma de los premios de los Nobel cuyo campo `date_awarded` sea `NULL`

SELECT award_year, category_fullname, date_awarded FROM nobels
WHERE date_awarded IS NULL


### Laureates

17. Devuelve todos los `known_name` de la tabla `laureates`.
18. Devuelve el `known_name` y el año de nacimiento de los 10 laureados más viejos.
19. Devuelve el `full_name` y el género y la fecha de la muerte de todos los laureados que no sigan vivos.
20. Devuelve el país y el `full_name` de los 10 laureados más jóvenes.
21. Devuelve `known_name` y ciudad del tercer laureado más jóven.
22. Devuelve todos los países SIN REPETIR cuyo laureado no haya muerto todavía.
23. Devuelve la quinta, sexta y séptima ciudad de nacimiento de los laureados ordenadas descendentemente. Si se llegasen a repetir haz que no se repitan.

### ✨🎉

24. Devuelve el país de nacimiento, `known_name` y categoría Nobel de los premiados en Química.
25. Devuelve la suma de los premios de los laureados cuyo país sean `USA` y `Japan`.
26. Devuelve `award_year`, categoría, motivación y `known_name` de aquellos que han ganado un Nobel procedentes de India.
27. Devuelve la afiliación, categoría y `known_name` de los laureados cuyo género sea `female`.
28. Devuelve el `known_name`, edad en la que fue premiado y el premio de los 5 laureados más jóvenes al momento de ser condecorado y cuyos premios sean los más altos.
29. Devuelve el `known_name` y el premio de los 5 laureados más jóvenes y cuyos premios sean los más altos.
30. Devuelve el nombre completo, la motivación y el premio de aquellos laureados que no tienen ninguna afiliación.
31. Devuelve el nombre completo, fecha de muerte y afiliación de los laureados cuyo nombre no comienza con la letra 'A'.
32. Devuelve el `known_name`, fecha de muerte, categoría y total de años que hace que murieron aquellos que ganaron el Nobel de Química.
33. Devuelve `known_name`, `category_fullname` y edad actual de los 5 Nobel cuyo `known_name`sean los más cortos, ordenados desde el más joven hasta el más viejo.
34. Devuelve `known_name`, la edad actual solo en años, la edad de cuando recibió el Nobel y la categoría del Nobel de aquellos laureados que tengan más de 80 años y aún sigan vivos.
35. Devuelve el nombre de la categoría y la suma total de los premios recibidos por categoría ordenados alfabéticamente.


const e4 => async () => {
  return await db.query(sql `
    SELECT name, author, isbn FROM books
    WERE rented_id IS ''
   `)
}