const { sql } = require("slonik");

const selectAll = (db) => async () => {
    try {
        const rawLeaders = await db.query(sql`
        SELECT leaders.name, leaders.badge, leaders.description, gyms.city
        FROM leaders
        JOIN gyms
            ON leaders.id = gyms.leader_id
        `);
        
        const leaders = rawLeaders.rows;
        
        return {
            ok: true,
            data: leaders,
        };
    } catch (error) {
        console.info("error at selectAll trainers");
        console.error(error.message);

        return {
            ok:false,
        };
    };
};


const selectByCity = (db) => async (city) => {
    try {
        const rawLeaders = await db.query(sql`
        SELECT leaders.name, leaders.badge, pokemons.name AS pokemon, gyms.city
        FROM leaders
        JOIN gyms
            ON leaders.id = gyms.leader_id
        JOIN pokemons 
            ON leaders.id = pokemons.leader_id
        WHERE gyms.city = ${city}
        `);
        
        const leaders = rawLeaders.rows;
        
        return {
            ok: true,
            data: leaders,
        };
    } catch (error) {
        console.info("error at selectByCity trainers");
        console.error(error.message);

        return {
            ok:false,
        };
    };
};


const selectByName = (db) => async (name) => {
    try {
        const rawLeaders = await db.query(sql`
        SELECT leaders.name, leaders.badge, pokemons.name AS pokemon, gyms.city
        FROM leaders
        JOIN gyms
            ON leaders.id = gyms.leader_id
        JOIN pokemons 
            ON leaders.id = pokemons.leader_id
        WHERE leaders.query_name = ${name}
        `);
        
        const leaders = rawLeaders.rows;
        
        return {
            ok: true,
            data: leaders,
        };
    } catch (error) {
        console.info("error at selectByName trainers");
        console.error(error.message);

        return {
            ok:false,
        };
    };
};



module.exports = {
    selectAll,
    selectByCity,
    selectByName,
};