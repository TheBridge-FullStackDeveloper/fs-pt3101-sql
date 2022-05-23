const { sql } = require("slonik");
const { v4: uuidv4 } = require("uuid");

const selectAll = (db) => async () => {
    try {
        const rawLeaders = await db.query(sql`
        SELECT leaders.name, leaders.badge, leaders.description, gyms.city
        FROM leaders
        JOIN gyms
            ON leaders.id = gyms.leader_id
        `);

        const leaders = rawLeaders.rows.rows;

        return {
            ok: true,
            data: leaders,
        };
    } catch (error) {
        console.info("error at selectAll trainers");
        console.error(error.message);

        return {
            ok: false,
        };
    };
};


const selectByCity = (db) => async (city) => {
    try {
        const rawLeaders = await db.query(sql`
        SELECT leaders.name AS leader, badge, city, array_agg(pokemons.name) AS pokemons
        FROM leaders 
        INNER JOIN gyms 
        ON gyms.leader_id = leaders.id
        INNER JOIN pokemons 
        ON pokemons.leader_id = leaders.id
        WHERE gyms.query_name = ${city}
        GROUP BY leaders.name, badge, city
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
            ok: false,
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
            ok: false,
        };
    };
};


const postTrainer = (db) => async (name, badge, description, city) => {
    try {
        const id = uuidv4();

        await db.query(sql`
            INSERT INTO leaders (
                id, name, badge, description, query_name
            ) VALUES (
                ${id}, ${name}, ${badge}, ${description}, ${name.trim().replace(' ', '-').toLowerCase()}
            ) ON CONFLICT DO NOTHING;
        `);

        await db.query(sql`
            INSERT INTO gyms (
                city, leader_id
            ) VALUES (
                ${city}, ${id}
            ) ON CONFLICT DO NOTHING;
        `);

        return {
            ok: true,
        };
    } catch (error) {
        console.info("error at postTrainer trainers");
        console.error(error.message);

        return {
            ok: false,
        };
    };
};


const addPokemons = (db) => async (pokemons, trainerName) => {
    try {

        for await (const pokemon of pokemons) {
            await db.query(sql`
                UPDATE pokemons
                set leader_id = (
                    SELECT id FROM leaders
                    WHERE query_name = ${trainerName}
                    )
                WHERE name = ${pokemon}
        `)
        };

        return {
            ok: true,
        };
    } catch (error) {
        console.info("error at addPokemons trainer");
        console.error(error.message);

        return {
            ok: false,
        };
    };
};




module.exports = {
    selectAll,
    selectByCity,
    selectByName,
    postTrainer,
    addPokemons,
};