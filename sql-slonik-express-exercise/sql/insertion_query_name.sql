UPDATE leaders 
SET query_name = REPLACE(TRIM(LOWER(name)), ' ', '-')