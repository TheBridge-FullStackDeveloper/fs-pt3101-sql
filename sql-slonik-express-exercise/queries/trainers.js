const { sql } = require('slonik');

const selectTrainers = (db) => async () =>{
    try {
        const trainers = await db.query(sql`
        SELECT name, badge, description, city FROM leaders
        INNER JOIN gyms
        ON leaders.id = gyms.leader_id
        `);
        return {
            ok: true,
            data: trainers.rows,
        }
    }catch (error){
        console.info('> error at "selectTrainers" query from trainers');
        console.error(error.message);

        return {
        ok: false,
        };
    }
}

const selectOneTrainer = (db) => async (trainername) =>{
    try {
        const trainers = await db.query(sql`
        SELECT name, badge, description, city, 	LOWER(name) as paramname FROM leaders
        INNER JOIN gyms
        ON leaders.id = gyms.leader_id
        `);
        const getOne = () => trainers.rows.find(element =>element.paramname === trainername.toLowerCase());

        return {
            ok: true,
            data: getOne(),
        }
    }catch (error){
        console.info('> error at "selectTrainers" query from trainers');
        console.error(error.message);

        return {
        ok: false,
        };
    }    
}

const createTrainer = (db) => async (trainer)=> {
    console.log(trainer.badge)
    try {
        const createTrainer = await db.query(sql`
        INSERT INTO LEADERS (NAME,BADGE,DESCRIPTION) VALUES (${trainer.name}, ${trainer.badge},${trainer.description});
        `)
        const lastId = await db.query(sql`
        SELECT id FROM leaders
        `)
        const leaderLastId = String(Object.values(lastId.rows[lastId.rows.length-1]).flat());

        const insertCity = await db.query(sql`
        INSERT INTO gyms (CITY, LEADER_ID) VALUES (${trainer.city}, ${leaderLastId});
        `)

        return {
            ok: true,
            data: trainer,
        }
    } catch (error) {
        console.info('> error at createTrainer query from trainers')
        console.log(error.message)
    }
}

const updatePokemons = db => async(pokemons, trainersName)=>{
    console.log(trainersName)
    console.log(pokemons)
    try {
        const leader_id = await db.query(sql`
        SELECT id FROM leaders
        WHERE leaders.name LIKE ${trainersName}
        `)
        const thisId = leader_id.rows[0].id
        
        for(poke of pokemons){
            let updateThese = await db.query(sql`
            UPDATE pokemons
            SET leader_id = ${thisId}
            WHERE name = ${poke}
            `)
        }
        
        return {
            ok: true,
            data: trainersName,
        }

    } catch (error) {
        console.info('> error at updatePokemons');
        console.error(error.message);
    }
}

module.exports = {
    selectTrainers,
    selectOneTrainer,
    createTrainer,
    updatePokemons
}