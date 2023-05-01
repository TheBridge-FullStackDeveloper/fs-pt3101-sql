const { sql } = require("slonik");

module.exports = (db) => async (pokeInfo) => {
	try {
        await db.query(sql.unsafe`
            INSERT INTO pokemons (
                name, level, id
            ) VALUES (
                ${pokeInfo.name}, ${pokeInfo.level}, ${pokeInfo.id}
            );
        `)

        return {
            ok: true,
            data: pokeInfo
        }
    } catch (error) {
        console.log(error.message);
        
        return {
            ok: false,
        }
    }
}