const { selectAllPokemons } =require('./queries');
const { selectAllPokemonsTypes } = require('./queries');
const { selectAllPokemonsDinamic } = require('./queries');

const selectAllP = (db) => async () => {
    try {
        console.log("Hola")
        const response = await db.query(selectAllPokemons())


        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectAllType = (db) => async () => {
    try {
        console.log("Hola")
        const response = await db.query(selectAllPokemonsTypes())


        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectAllTypeDinamic = (db,params) => async () => {
    try {

        const response = await db.query(selectAllPokemonsDinamic(params))

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}


module.exports = {
    selectAllP,
    selectAllType,
    selectAllTypeDinamic
}