
DROP TABLE IF EXISTS pokemons_elements;


CREATE TABLE IF NOT EXISTS pokemons_elements (
  pokemon_id uuid REFERENCES pokemons (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  element_id uuid REFERENCES elements (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT pokemon_element_id PRIMARY KEY (pokemon_id, element_id)
);


  
INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Geodude'),
  (SELECT id FROM elements WHERE name = 'rock')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Geodude'),
  (SELECT id FROM elements WHERE name = 'ground')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Onix'),
  (SELECT id FROM elements WHERE name = 'rock')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Onix'),
  (SELECT id FROM elements WHERE name = 'ground')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Staryu'),
  (SELECT id FROM elements WHERE name = 'water')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Starmie'),
  (SELECT id FROM elements WHERE name = 'water')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Starmie'),
  (SELECT id FROM elements WHERE name = 'psychic')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Raichu'),
  (SELECT id FROM elements WHERE name = 'electric')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Tangela'),
  (SELECT id FROM elements WHERE name = 'grass')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Weepinbell'),
  (SELECT id FROM elements WHERE name = 'grass')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Weepinbell'),
  (SELECT id FROM elements WHERE name = 'poison')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Gloom'),
  (SELECT id FROM elements WHERE name = 'grass')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Gloom'),
  (SELECT id FROM elements WHERE name = 'poison')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Venonat'),
  (SELECT id FROM elements WHERE name = 'bug')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Venonat'),
  (SELECT id FROM elements WHERE name = 'poison')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Venomoth'),
  (SELECT id FROM elements WHERE name = 'bug')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Venomoth'),
  (SELECT id FROM elements WHERE name = 'poison')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Abra'),
  (SELECT id FROM elements WHERE name = 'psychic')
); 

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Kadabra'),
  (SELECT id FROM elements WHERE name = 'psychic')
); 

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Alakazam'),
  (SELECT id FROM elements WHERE name = 'psychic')
); 

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Ninetales'),
  (SELECT id FROM elements WHERE name = 'fire')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Rapidash'),
  (SELECT id FROM elements WHERE name = 'fire')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Arcanine'),
  (SELECT id FROM elements WHERE name = 'fire')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Dugtrio'),
  (SELECT id FROM elements WHERE name = 'ground')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Persian'),
  (SELECT id FROM elements WHERE name = 'normal')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Nidoqueen'),
  (SELECT id FROM elements WHERE name = 'poison')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Nidoqueen'),
  (SELECT id FROM elements WHERE name = 'ground')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Nidoking'),
  (SELECT id FROM elements WHERE name = 'poison')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Nidoking'),
  (SELECT id FROM elements WHERE name = 'ground')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Rhydon'),
  (SELECT id FROM elements WHERE name = 'ground')
);

INSERT INTO pokemons_elements (
  pokemon_id, element_id
) VALUES (
  (SELECT id FROM pokemons WHERE name LIKE 'Rhydon'),
  (SELECT id FROM elements WHERE name = 'rock')
);

