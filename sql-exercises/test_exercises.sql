--1 Nobels
SELECT * FROM laureates
--2
SELECT * FROM nobels
--3
SELECT *
FROM nobels
WHERE category = 'Chemistry'
--4
SELECT category_fullname
FROM nobels
WHERE category = 'Economic Sciences'
--5
SELECT motivation, category
FROM nobels
WHERE category = 'Peace'
--6
SELECT category_fullname
FROM nobels
WHERE  award_year = 2019
--7
SELECT category, award_year
FROM nobels
WHERE date_awarded  BETWEEN '11-10-2007' AND '12-10-2019'
--inventado por mi, me sentí el puto amo
SELECT category_fullname, award_year
FROM nobels
ORDER BY award_year DESC
--8
SELECT category_fullname, award_year
FROM nobels
WHERE category = 'Chemistry'
ORDER BY award_year DESC
--9
SELECT category, motivation, category_fullname
FROM nobels
WHERE  prize_amount > 5000000
--10
SELECT category, award_year, category_fullname
FROM nobels
WHERE  category = 'Physics'
--11
SELECT category, award_year
FROM nobels
WHERE prize_amount  BETWEEN 100000 AND 300000
--12
SELECT category
FROM nobels
WHERE category IN ('Peace', 'Literature')
​
SELECT COUNT (category)
FROM nobels
WHERE category IN ('Peace', 'Literature')
--13
SELECT category, Affiliations
FROM nobels
ORDER BY prize_amount ASC
LIMIT 5
--14
SELECT DISTINCT award_year
FROM nobels
ORDER BY award_year ASC
LIMIT 7
--15
SELECT award_year, category_fullname
FROM nobels
WHERE date_awarded IS NULL
--16
SELECT COUNT (*)
FROM nobels
WHERE date_awarded IS NULL
--17 Laureates
SELECT known_name
FROM laureates
--18
SELECT known_name, birth_date
FROM laureates
ORDER BY birth_date ASC
LIMIT 10
--19
SELECT FULL_name, gender, death_date
FROM laureates
WHERE death_date IS NOT NULL
--20
SELECT full_name, birth_country
FROM laureates
ORDER BY birth_date DESC
LIMIT 10
--21
SELECT known_name, birth_city
FROM laureates
ORDER BY birth_date DESC
LIMIT 1 
OFFSET 2
--22
SELECT DISTINCT birth_country
FROM laureates
WHERE death_date IS NULL
--23
SELECT DISTINCT birth_city, birth_date
FROM laureates
ORDER BY birth_date DESC
LIMIT 3 
OFFSET 4
--24