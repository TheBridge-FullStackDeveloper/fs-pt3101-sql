const { sql } = require('slonik');

const selectTypes = (db) => async () =>{
    try {

        const getTypes = await db.query(sql`
            SELECT name FROM elements
        `);

        const getArr = getTypes.rows
        const typeList = []
        for(item of getArr){
            typeList.push(item.name)
        }
        return {
            ok: true,
            data: typeList
        }
        
    } catch (error) {
        console.info('> error at "selectCities" query from pokemons');
        console.log(error.message);
        return{
            ok:false,
        };
    }
}

module.exports = {
    selectTypes,
}