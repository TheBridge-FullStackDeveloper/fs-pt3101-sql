
ALTER TABLE pokemons
DROP COLUMN IF EXISTS list_id;

ALTER TABLE pokemons
ADD list_id SMALLINT;

UPDATE pokemons 
SET list_id = id;

ALTER TABLE pokemons
DROP COLUMN IF EXISTS id CASCADE;

ALTER TABLE pokemons
ADD final_id uuid PRIMARY KEY DEFAULT uuid_generate_v4();

ALTER TABLE pokemons 
RENAME COLUMN final_id TO id;

ALTER TABLE pokemons_elements
DROP COLUMN IF EXISTS pokemon_id;

ALTER TABLE pokemons_elements
ADD pokemon_id uuid REFERENCES pokemons (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;