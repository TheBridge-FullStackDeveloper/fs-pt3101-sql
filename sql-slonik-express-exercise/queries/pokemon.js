const { sql } = require("slonik");

const selectAll = (db) => async () => {
    try {
        //gets pokemon array and elements array with reference
        const rawPokemon = await db.query(sql`
        SELECT DISTINCT pokemons.id, pokemons.name
        FROM pokemons
        `);
        const rawElements = await db.query(sql`
        SELECT elements.name, pokemon_id
        FROM elements
        JOIN pokemons_elements
        ON elements.id = pokemons_elements.element_id
        `);
        const pokemonArr = rawPokemon.rows;
        const elementArr = rawElements.rows;
        //map pokemon array to give them their respectives types
        const getElements = () => pokemonArr.map(pokemon => {

            pokemon['types'] = []
            elementArr.map(element => {
                if(pokemon.id === element.pokemon_id) {
                    pokemon.types.push(element.name)
                }
            });
        });
        getElements();
        
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

module.exports = {
    selectAll,
};