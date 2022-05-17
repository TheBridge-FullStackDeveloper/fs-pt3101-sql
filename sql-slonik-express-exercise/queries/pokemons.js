const { sql } = require("slonik");

const selectAll = (db) => async (type1, type2) => {
    try {
        /*
          💡tried to do it in sql but it doesn't come in array
        const rawPokemon = await db.query(sql`
        SELECT pokemons.id, pokemons.name, array_agg(elements.name) AS types
        FROM pokemons
        JOIN pokemons_elements
            ON pokemons.id = pokemons_elements.pokemon_id
        JOIN elements 
            ON pokemons_elements.element_id = elements.id
        GROUP BY pokemons.id
        `);
        const pokemonArr = rawPokemon.rows;
        const result = pokemonArr.map(pokemon => pokemon['types'] = [pokemon['types'].slice(1, -1)])
        💡tried to do it in sql but it doesn't come in array
        */

        //gets pokemon array and elements array with reference
        const rawPokemon = await db.query(sql`
        SELECT DISTINCT pokemons.id, pokemons.name
        FROM pokemons
        ORDER BY pokemons.id
        `);

        const rawElements = await db.query(sql`
        SELECT elements.name, pokemon_id
        FROM elements
        JOIN pokemons_elements
        ON elements.id = pokemons_elements.element_id
        `);

        const pokemonArr = rawPokemon.rows;
        const elementArr = rawElements.rows;

        //map pokemon array to give push their respectives types
        const getElements = (pokemons, elements) => pokemons.map(pokemon => {

            pokemon['types'] = []
            elements.map(element => {
                if(pokemon.id === element.pokemon_id) {
                    pokemon.types.push(element.name)
                }
            });
        });
        getElements(pokemonArr, elementArr);

        return {
            ok: true,
            data: pokemonArr,
        };
    } catch (error) {
        console.info("error at selectAll pokemon");
        console.error(error.message);

        return {
            ok:false,
        };
    };
};


const selectByType = (db) => async (type) => {
    try {
        const rawpokemons = await db.query(sql`
        SELECT pokemons.name, elements.name AS type
        FROM pokemons
        JOIN pokemons_elements
            ON pokemons.id = pokemons_elements.pokemon_id
        JOIN elements 
            ON pokemons_elements.element_id = elements.id
        WHERE elements.name = ${type}
        ORDER BY pokemons.id
        `);
        
        const pokemons = rawpokemons.rows;
        
        return {
            ok: true,
            data: pokemons,
        };
    } catch (error) {
        console.info("error at selectAll pokemon");
        console.error(error.message);

        return {
            ok:false,
        };
    };
};




module.exports = {
    selectAll,
    selectByType,
};