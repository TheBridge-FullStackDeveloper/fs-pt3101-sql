const { selectAll, selectType, selectPokemon } = require('./queries')

// 1.- Primer ejercicio y quinto ejercicio
const chooseAll = (db) => async (elementId) => {
    try {

        const response = await db.query(selectAll(elementId))  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

// 6.- Sexto ejercicio

const chooseType = (db) => async (type) => {
    try {

        const result = await db.query(selectType(type))  
        return {
            ok: true,
            response: result.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

// 7.- Séptimo ejercicio

const choosePokemon = (db) => async (pokemon) => {
    try {

        const doggy = await db.query(selectPokemon(pokemon))  
        return {
            ok: true,
            response: doggy.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}





module.exports = {
    chooseAll,
    chooseType,
    choosePokemon,
    
}