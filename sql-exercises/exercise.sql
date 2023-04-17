'Ejercicios 1 y 2'

SELECT * FROM laureates;

SELECT * FROM nobels;


'NOBELS'

'Ejercicio 3'

SELECT * FROM nobels
WHERE LOWER(category) LIKE 'chemistry';

'Ejercicio 4'

SELECT category_fullname FROM nobels
WHERE LOWER(category) LIKE 'economic sciences';

'Ejercicio 5'

SELECT motivation, category FROM nobels
WHERE LOWER(category_fullname) LIKE 'the nobel peace prize';

'Ejercicio 6'

SELECT category_fullname, award_year FROM nobels
WHERE award_year = 2019;

'Ejercicio 7'

SELECT category, award_year FROM nobels
WHERE date_awarded BETWEEN '2007-10-12' AND '2019-10-11';

'Ejercicio 8'

SELECT category_fullname, award_year FROM nobels
WHERE LOWER(category) LIKE 'chemistry'
ORDER BY award_year, date_awarded ASC;

'Ejercicio 9'

SELECT category, motivation, prize_amount FROM nobels
WHERE prize_amount > 500000;

'Ejercicio 10'

SELECT category, award_year, prize_amount FROM nobels
WHERE LOWER(category) LIKE 'physics';

'Ejercicio 11'

SELECT category, prize_amount FROM nobels
WHERE prize_amount BETWEEN 100000 AND 300000;

'Ejercicio 12'

SELECT COUNT(category) FROM nobels
WHERE category IN ('Peace', 'Literature');

'Ejercicio 13'

SELECT affiliations, category FROM nobels
ORDER BY prize_amount ASC
LIMIT 5;

'Ejercicio 14'

SELECT DISTINCT award_year FROM nobels
ORDER BY award_year DESC
LIMIT 7;

'Ejercicio 15'

SELECT award_year, category_fullname, date_awarded FROM nobels
WHERE date_awarded IS NULL;

'Ejercicio 16'

SELECT SUM(prize_amount) FROM nobels
WHERE date_awarded IS NULL;


'LAUREATES'

'Ejercicio 17'

SELECT known_name FROM laureates;

'Ejercicio 18'

SELECT known_name, birth_date FROM laureates
ORDER BY birth_date ASC
LIMIT 10;

'Ejercicio 19'

SELECT full_name, gender, death_date FROM laureates
WHERE death_date IS NOT NULL;

'Ejercicio 20'

SELECT birth_country, full_name FROM laureates
ORDER BY birth_date DESC
LIMIT 10;

'Ejercicio 21'

SELECT known_name, birth_city FROM laureates
ORDER BY birth_date DESC
LIMIT 1
OFFSET 2;

'Ejercicio 22'

SELECT DISTINCT birth_country from laureates
WHERE death_date IS NULL;

'Ejercicio 23'

SELECT DISTINCT birth_city from laureates
ORDER BY birth_city DESC
LIMIT 3
OFFSET 4;


'PARTY HARD'

'Ejercicio 24'

SELECT laureates.birth_country, laureates.known_name, nobels.category 
FROM laureates JOIN nobels ON (laureates.id = nobels.laureate_id)
WHERE category = 'Chemistry';

'Ejercicio 25'

SELECT COUNT(full_name) FROM laureates
WHERE birth_country IN ('USA','Japan');

'Ejercicio 26'

SELECT nobels.award_year, nobels.category, nobels.motivation, laureates.known_name
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
WHERE birth_country = 'India';

'Ejercicio 27'

SELECT nobels.award_year, nobels.category, laureates.known_name
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
WHERE gender = 'female';

'Ejercicio 28'

SELECT laureates.known_name, DATE_PART('year', AGE(nobels.date_awarded, laureates.birth_date)) AS age, nobels.prize_amount
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
ORDER BY age ASC, prize_amount DESC
LIMIT 5;

'Ejercicio 29'

SELECT laureates.known_name, nobels.prize_amount
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
ORDER BY birth_date DESC, prize_amount DESC
LIMIT 5;

'Ejercicio 30'

SELECT laureates.full_name, nobels.motivation, nobels.category_fullname
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
WHERE affiliations IS NULL;

'Ejercicio 31'

SELECT laureates.full_name, laureates.death_date, nobels.affiliations
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
WHERE full_name NOT LIKE 'A%';

'Ejercicio 32'

SELECT laureates.known_name, laureates.death_date, nobels.category, DATE_PART('year', AGE(laureates.death_date)) AS years
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
WHERE category = 'Chemistry'

'Ejercicio 33'

SELECT laureates.known_name, nobels.category_fullname, DATE_PART('year', AGE(laureates.birth_date)) AS age
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
ORDER BY LENGTH(known_name) ASC, birth_date DESC
LIMIT 5;

'Ejercicio 34'

SELECT laureates.known_name, DATE_PART('year', AGE(laureates.birth_date)) AS age, DATE_PART('year', AGE(nobels.date_awarded, laureates.birth_date)) AS age_awarded, nobels.category
FROM nobels JOIN laureates ON (nobels.laureate_id = laureates.id)
WHERE death_date IS NULL AND DATE_PART('year', AGE(laureates.birth_date)) > 80;

'Ejercicio 35'

SELECT category, COUNT(category) FROM nobels
GROUP BY(category)
ORDER BY category ASC;