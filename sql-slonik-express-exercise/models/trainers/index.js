const onePokemon = require("../../controllers/trainers/one-pokemon");
const { selectALLPokemons, selectTrainers, trainersCities, differentsTypes, toOnlyType } = require("./queries")

const selectAll = (db) => async () => {
    try {
        const response = await db.query(selectALLPokemons())

        return {
            ok: true,
            response: response.rows

        }
        cons
    } catch (error) {
        return {
            ok: false,
            message: error.message,
        }
    }
};

const selectAllTrainers = (db) => async () => {
    try {
        const response = await db.query(selectTrainers())
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        return {
            ok: false,
            message: error.message,

        }
    }
}

const getCities = (db) => async () => {
    try {
        const response = await db.query(trainersCities())
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        return {
            ok: false,
            message: error.message,
        }

    }
}
 const allTypes = (db) =>async () =>{
    try {
        const response = await db.query(differentsTypes())
        return{
            ok:true,
            response:response.rows
        }
    } catch (error) {
        return{
            ok:false,
            message:error.message
        }
        
    }

 }

 const onlyType = (db)=>async (type) =>{
    try {
        const response = await db.query(toOnlyType(type))
        return{
            ok:true,
            response:response.rows
        }
    } catch (error) {
        return{
            ok:false,
            message:error.message
        }
    }
 }

 const onePoke = (db)=>async (name) =>{
    try {
        const response = await db.query(onePokemon(name))
        return{
            ok:true,
            response:response.rows
        }
    } catch (error) {
        return{
            ok:false,
            message:error.message
        }
    }
 }

module.exports = {
    selectAll,
    selectAllTrainers,
    getCities,
    allTypes,
    onlyType,
    onePoke
}