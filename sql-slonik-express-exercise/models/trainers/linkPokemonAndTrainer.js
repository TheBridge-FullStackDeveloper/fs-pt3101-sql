const { sql } = require("slonik");

module.exports = (db) => async (trainer, pokemonsArray) => {
    const pokeArray = pokemonsArray.pokemons;

    for(let i=0; i<pokeArray.length; i++){
        try {
            await db.query(sql.unsafe`
                UPDATE pokemons
                SET leader_id = (SELECT id FROM leaders WHERE LOWER(name) = ${trainer})
                WHERE name = ${pokeArray[i]}
            `)
        } catch (error) {
            console.log(error.message);

            return {
                ok: false
            }
        }
    }

    return {
        ok: true,
        data: {
            trainer: trainer,
            pokemons: pokeArray
        }
    }
}