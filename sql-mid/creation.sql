DROP TABLE IF EXISTS libraries;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  dni TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS libraries (
  id SERIAL PRIMARY KEY,
  center TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT NOT NULL,
  identifier TEXT UNIQUE NOT NULL,
  director_id INTEGER REFERENCES users
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users_libraries (
  member_id INTEGER REFERENCES users
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  library_id INTEGER REFERENCES libraries
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT member_library_id PRIMARY KEY (member_id, library_id)
);

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  author TEXT,
  isbn TEXT UNIQUE NOT NULL,
  rented_id INTEGER REFERENCES users
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

-- Sintaxis FK
-- column_name COLUMN_TYPE REFERENCES table_name
--   [ON UPDATE ...]
--   [ON DELETE ...]

-- Create Constraint PK
-- CONSTRAINT column_name PRIMARY KEY (fk1, fk2)