-- 1. Devuelve toda la información de la tabla `laureates`.

SELECT id, known_name, full_name, gender, birth_date,
  birth_city, birth_country, death_date, death_city,
  death_country 
FROM laureates;

-- 17. Devuelve todos los `known_name` de la tabla `laureates`.

SELECT known_name
FROM laureates;

-- 18. Devuelve el `known_name` y el año de nacimiento de los 10 laureados más viejos.

SELECT known_name, birth_date
FROM laureates
ORDER BY birth_date ASC
FETCH FIRST 10 ROWS ONLY;

-- 19. Devuelve el `full_name` y el género y la fecha de la muerte de todos los laureados que no sigan vivos.

SELECT full_name, gender, death_date
FROM laureates
WHERE death_date IS NOT NULL;

-- 20. Devuelve el país y el `full_name` de los 10 laureados más jóvenes.

SELECT birth_country, full_name
FROM laureates
ORDER BY birth_date DESC
FETCH FIRST 10 ROWS ONLY;

-- 21. Devuelve `known_name` y ciudad del tercer laureado más jóven.

SELECT known_name, birth_city
FROM laureates
ORDER BY birth_date DESC
LIMIT 1 OFFSET 2;

-- 22. Devuelve todos los países SIN REPETIR cuyo laureado no haya muerto todavía.

SELECT DISTINCT birth_country
FROM laureates
WHERE death_date IS NULL; 

-- 23. Devuelve la quinta, sexta y séptima ciudad de nacimiento de los laureados ordenadas descendentemente. Si se llegasen a repetir haz que no se repitan.

SELECT DISTINCT birth_city
FROM laureates
ORDER BY birth_city DESC
LIMIT 3 OFFSET 4;
