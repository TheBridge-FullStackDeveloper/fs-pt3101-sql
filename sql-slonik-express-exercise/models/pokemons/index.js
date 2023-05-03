
const {selectAllpokemon} = require('./queries')
const {selectPokemonByType} = require('./queries')
const {selectAllpokemonName} = require('./queries')
const { sql } = require("slonik")

const selectAll = (db) => async ()=> {
    try{
        const result = await db.query(selectAllpokemon());
        
    
        return {
            ok: true,
            response: result.rows
        }
    }catch(error){
        return {
            ok: false,
            message: error.message,
        }
    }
}
const selectAllUnico = (db) => async (type)=> {
    try{
        const result = await db.query(selectPokemonByType(type));
        
    
        return {
            ok: true,
            response: result.rows
        }
    }catch(error){
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectAllName = (db) => async (name)=> {
    try{
        const result = await db.query(selectAllpokemonName(name));
        
    
        return {
            ok: true,
            response: result.rows
        }
    }catch(error){
        return {
            ok: false,
            message: error.message,
        }
    }
}

const selectNewPokemon = (db) => async (pokemon) => {
    try {
        
        await db.query(sql.unsafe`
      INSERT INTO pokemons ( name, level, id)
      VALUES (${pokemon.name}, ${pokemon.level},${pokemon.id});`)


        return {
            ok: true,
            data: pokemon
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}
module.exports = {
    selectAll,
    selectAllUnico,
    selectAllName,
    selectNewPokemon,

}