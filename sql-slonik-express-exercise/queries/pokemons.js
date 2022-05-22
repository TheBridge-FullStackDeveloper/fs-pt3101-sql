const { sql } = require("slonik");
const axios = require('axios');

const selectAll = (db) => async (type1, type2) => {
  try {
    const pokemons = await db.query(sql`
      SELECT DISTINCT id, name FROM pokemons;
    `);
    const pokemonArr = pokemons.rows

    const pokeTypes = await db.query(sql`
    SELECT pokemon_id, id, name FROM pokemons_elements
    INNER JOIN elements
    ON pokemons_elements.element_id = elements.id
    `);

    const pokeTypesArr = pokeTypes.rows

    console.log(type1, type2)

    const getElements = () => pokemonArr.map(pokemon =>{

      pokemon['types'] = []
      pokeTypesArr.map(element =>{
        if(pokemon.id === element.pokemon_id){
          pokemon.types.push(String(element.name))
        }
      })
    })
    getElements();

    const filtered = []
    if(!type1 === false && !type2 === false){
      const getPoke = () => pokemonArr.filter(pokemon =>{
        if(pokemon.types.includes(type1) && pokemon.types.includes(type2)){
          filtered.push(pokemon)
        }
      })
      getPoke()
      return {
        ok: true,
        data: filtered,
      };

    }else if(!type1 === false){
      const getPoke = () => pokemonArr.filter(pokemon =>{
        if(pokemon.types.includes(type1)){
          filtered.push(pokemon)
        }
      })
      getPoke()
      return {
        ok: true,
        data: filtered,
      };
    }else{
      return {
        ok: true,
        data: pokemons.rows,
      };
    }
  
    
  } catch (error) {
    console.info('> error at "selectAll" query from pokemons');
    console.error(error.message);

    return {
      ok: false,
    };
  }
};

// selectType //

const selectType = (db) => async (type) => {

  try {
    const pokemons = await db.query(sql`
      SELECT DISTINCT id, name FROM pokemons;
    `);
    const pokemonArr = pokemons.rows

    const pokeTypes = await db.query(sql`
    SELECT pokemon_id, id, name FROM pokemons_elements
    INNER JOIN elements
    ON pokemons_elements.element_id = elements.id
    `);

    const pokeTypesArr = pokeTypes.rows

    const getElements = () => pokemonArr.map(pokemon =>{

      pokemon['types'] = []
      pokeTypesArr.map(element =>{
        if(pokemon.id === element.pokemon_id){
          pokemon.types.push(String(element.name))
        }
      })
    })
    getElements();

    const filtered = []
    const getPoke = () => pokemonArr.filter(pokemon =>{
      if(pokemon.types.includes(type) && pokemon.types.length ===1){
        filtered.push(pokemon)
      }
      
    })
    
    getPoke()
    console.log(filtered)

    return {
      ok: true,
      data: filtered,
    };

  } catch (error) {
    console.log('> error at "selectType" query from pokemons');
    console.log('error.message')

    return {
      ok: false,
    };
  }

}


// selectOne //

const selectOne = (db) => async (pokemonname) => {
  try {

    const pokemons = await db.query(sql`
      SELECT DISTINCT id, name FROM pokemons;
    `);
    const pokemonArr = pokemons.rows

    const pokeTypes = await db.query(sql`
    SELECT pokemon_id, id, name FROM pokemons_elements
    INNER JOIN elements
    ON pokemons_elements.element_id = elements.id
    `);

    const pokeTypesArr = pokeTypes.rows

    const getElements = () => pokemonArr.map(pokemon =>{

      pokemon['types'] = []
      pokeTypesArr.map(element =>{
        if(pokemon.id === element.pokemon_id){
          pokemon.types.push(String(element.name))
        }
      })
    })
    getElements();
  
    const onlyOne = () =>pokemonArr.find(element => element.name === pokemonname)
    const onlyOneResult = onlyOne()
    let finalResult = onlyOneResult

    if(!onlyOneResult){
      const pokeSearch = pokemonname.toLowerCase()
      
      const URL = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
      const result = await axios.get(URL)
      const {name, base_experience, id} = result.data;
      response = 'Nuevo Poke agregado'
      const newPokemon = await db.query(sql`
        INSERT INTO pokemons (id, name, level) VALUES (${id}, ${name}, ${base_experience})
      `)
      finalResult = `Pokemon no encontrado en BBDD, se ha importado de pokeApi`
    }

    return {
      ok: true,
      data: finalResult,
    };
    
  } catch (error) {
    console.info('> Error query "selectOne')
    console.log(error.message)

    return {
      ok: false
    }
  }
}

// newPokemon //
const newPokemon = (db) => async(pokemoninfo) =>{
  try {
    const pokemonName = pokemoninfo.name;
    const pokemonLevel = pokemoninfo.level;
    const pokemonId = pokemoninfo.id;
    let response = ""
    const selectAll = await db.query(sql`
    SELECT DISTINCT id, name FROM pokemons;`);
    const selectAllArr = selectAll.rows;
    const result = () => selectAllArr.find(element=> element.name === pokemonName || element.id === pokemonId)

    if(result() !== undefined){
      response = 'Ya existe un Pokemon con ese id o nombre'
   // const newPokemon = await db.query(sql``)

    }else {
      response = 'Nuevo Poke agregado'
      const newPokemon = await db.query(sql`
        INSERT INTO pokemons (id, name, level) VALUES (${pokemonId}, ${pokemonName}, ${pokemonLevel})
      `)
    }
    return {
      ok: true,
      data: pokemoninfo,
      msg: response
    }
      
  } catch (error) {
    console.info('>Error Query newPokemon')
    console.log(error.message)
  }
}


module.exports = {
  selectAll,
  selectType,
  selectOne,
  newPokemon,
};