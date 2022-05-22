const { sql } = require('slonik');

const selectCities = (db) => async () =>{
    try {

        const trainersInfo = await db.query(sql`
        SELECT leaders.id, name, badge, description, city FROM leaders
        INNER JOIN gyms
        ON leaders.id = gyms.leader_id
        `);

        const trainersArr = trainersInfo.rows
        console.log(trainersInfo.rows)

        const pokemons = await db.query(sql`
            SELECT name, leader_id FROM pokemons
        `)

        const pokeArr = pokemons.rows;
        console.log(pokemons.rows);

        const getFullList = () => trainersArr.map(trainer =>{

            trainer['pokemon_list'] = []
            pokeArr.map(pokemon =>{
                if(trainer.id === pokemon.leader_id){
                    trainer.pokemon_list.push(String(pokemon.name))
                    console.log(trainer)
                }
            })

        })

        getFullList()
        
        return{
            ok:true,
            data: trainersInfo.rows
        }
        
    } catch (error) {
        console.info('> error at "selectCities" query from pokemons');
        console.log(error.message);

        return {
            ok:false,
        };
    };

}

module.exports = {
    selectCities,
}