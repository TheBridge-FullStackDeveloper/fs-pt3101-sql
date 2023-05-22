/* NOBELS */


1.SELECT *
FROM laureates

2.SELECT *
FROM nobels

3.SELECT *
FROM nobels
where category='Chemistry'

4.SELECT category_fullname,category
FROM nobels 
where category = 'Economic Sciences'

5.SELECT category, motivation
FROM nobels
WHERE category='Peace'

6.SELECT category_fullname,award_year
FROM nobels
where award_year = 2019

7.SELECT category,award_year
FROM nobels
WHERE date_awarded BETWEEN '2007-09-12' AND '2019-09-11'

8.SELECT category_fullname, award_year
FROM nobels
ORDER BY award_year ASC

9.SELECT category,award_year,prize_amount
FROM nobels
WHERE prize_amount >= '500000'

10.SELECT category,award_year
FROM nobels
WHERE category='Physics'

11.SELECT category,award_year
FROM nobels
WHERE prize_amount BETWEEN 100000 AND 300000


12.SELECT SUM(prize_amount)
FROM nobels
WHERE category IN ('Peace','Literature')

13.SELECT affiliations, category
FROM nobels
ORDER BY prize_amount DESC
LIMIT 5

14.SELECT DISTINCT award_year
FROM nobels
ORDER BY award_year DESC
limit 7


15.SELECT award_year, category_fullname, date_awarded
FROM nobels
WHERE date_awarded IS NULL


16.SELECT SUM(prize_amount)
FROM nobels
WHERE date_awarded IS null

/* LAUREATES */

17.SELECT known_name
FROM laureates

18.SELECT known_name,birth_date
FROM laureates
ORDER BY birth_date asc
limit 10

19.SELECT full_name, gender, death_date
FROM laureates
where death_date IS NOT NULL

20.SELECT full_name, birth_country
FROM laureates
ORDER BY birth_date DESC
limit 10

21.SELECT known_name, birth_city
FROM laureates
ORDER BY birth_date DESC
limit 2.1

22.SELECT DISTINCT birth_country
FROM laureates
WHERE death_date is NULL

23.SELECT DISTINCT birth_city
FROM laureates
ORDER BY birth_city DESC
limit 7 OFFSET 4

24.SELECT l.birth_country, l.known_name, n.category
FROM laureates AS l
INNER JOIN nobels AS n
ON l.id=n.laureate_id
WHERE n.category='Chemistry'

25.SELECT SUM(n.prize_amount)
FROM laureates AS l
INNER JOIN nobels AS n
ON l.id=n.laureate_id
WHERE birth_country IN ('Usa','Japan')

26.SELECT n.award_year, n.category, n.motivation, l.known_name
FROM nobels AS n
INNER JOIN laureates AS l
ON n.laureate_id=l.id
WHERE l.birth_country= 'India'

27.SELECT n.affiliations, n.category, l.known_name
FROM nobels AS n
INNER JOIN laureates AS l
ON n.laureate_id=l.id
WHERE gender = 'female'

28.SELECT l.known_name, n.award_year, n.prize_amount, EXTRACT(YEAR FROM AGE(n.date_awarded, l.birth_date)) AS age_laureate
FROM nobels AS n
INNER JOIN laureates AS l
ON l.id = n.laureate_id
ORDER BY age_laureate ASC, n.prize_amount DESC
limit 5

29.SELECT l.known_name, n.prize_amount, EXTRACT(YEAR FROM AGE(n.date_awarded, l.birth_date)) AS age_laureate
FROM nobels AS n
INNER JOIN laureates AS l
ON l.id = n.laureate_id
ORDER BY age_laureate ASC, n.prize_amount DESC
limit 5

30.SELECT l.full_name, n.motivation, n.prize_amount
FROM nobels AS n
INNER JOIN laureates AS l
ON n.laureate_id=l.id
WHERE affiliations IS NULL

31.SELECT l.full_name, l.death_date, n.affiliations
FROM laureates AS l
INNER JOIN nobels AS n
ON l.id=n.laureate_id
WHERE l.full_name NOT LIKE 'A%'

32.SELECT l.known_name, l.death_date, n.category, 
       EXTRACT(year FROM age(NOW(), l.death_date)) AS years_since_death
FROM laureates l 
JOIN nobels n ON l.id = n.laureate_id 
WHERE n.category = 'Chemistry'
ORDER BY l.death_date DESC;

33.SELECT l.known_name, n.category_fullname, EXTRACT(year FROM age(NOW(), l.birth_date)) AS current_age
FROM laureates l
JOIN nobels n ON l.id = n.laureate_id
ORDER BY LENGTH(l.known_name), l.birth_date
LIMIT 5;

34.SELECT l.known_name, 
       EXTRACT(year FROM age(NOW(), l.birth_date)) AS current_age,
       EXTRACT(year FROM age(n.date_awarded, l.birth_date)) AS age_at_nobel,
       n.category
FROM laureates l
JOIN nobels n ON l.id = n.laureate_id
WHERE l.death_date IS NULL 
  AND l.birth_date <= NOW() - INTERVAL '80 years'
ORDER BY l.birth_date;

35.SELECT category, SUM(prize_amount) AS suma_total
FROM nobels
GROUP BY category
ORDER BY category ASC;

