const { sql } = require("slonik");

module.exports = (db) => async (type, pokemonsArray) => {
    const pokeArray = pokemonsArray.pokemons;

    for(let i=0; i<pokeArray.length; i++){
        try {
            await db.query(sql.unsafe`
                INSERT INTO pokemons_elements (
                    pokemon_id, element_id
                ) VALUES (
                    (SELECT pokemons.id FROM pokemons WHERE pokemons.name = ${pokeArray[i]}),
                    (SELECT elements.id FROM elements WHERE elements.name = ${type})
                )
            `)
        } catch (error) {
            console.log(error.message);

            return {
                ok:false
            }
        }
    }

    return {
        ok: true,
        data: {
            type: type,
            pokemons: pokeArray
        }
    }
}