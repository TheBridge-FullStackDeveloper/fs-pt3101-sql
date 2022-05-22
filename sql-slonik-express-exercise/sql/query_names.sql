ALTER TABLE leaders
DROP COLUMN IF EXISTS query_name;

ALTER TABLE gyms
DROP COLUMN IF EXISTS query_name;


ALTER TABLE leaders
ADD query_name TEXT;

ALTER TABLE gyms
ADD query_name TEXT;


UPDATE leaders 
SET query_name = REPLACE(TRIM(LOWER(name)), ' ', '-');

UPDATE gyms
SET query_name = REPLACE(TRIM(LOWER(city)), ' ', '-');