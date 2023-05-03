
const queries= require('../../models/pokemons')

module.exports = (db) => async (req,res,next) => {

    const dbRes= await queries.selectAll(await db)()
    const pokemonlist = dbRes.response
    const newList=[]
    
    /*
    pokemonlist.forEach((pokemon)=>{
        pokemon.types=[pokemon.type_pokemon]
        const existPokemon= newList.some((newobj)=>{
            if(newobj.id === pokemon.id){
                return true
            }else{
                return false
            }
        })

        if(existPokemon === false){
            delete pokemon.type_pokemon
            newList.push(pokemon)
        }else{
            for (let i= 0; i< newList.length; i++) {
                const newobj = newList[i];

                if(newobj.id === pokemon.id){
                    newobj.types.push(pokemon.type_pokemon)
                }
                
                console.log(newobj)

            }
        }
       
        console.log(pokemon.id, pokemon.type_pokemon)

    })*/

    const newSimpleList = pokemonlist.reduce((result, pokemon) => ({
        ...result,
        [pokemon.id]: {
            id: pokemon.id,
            name: pokemon.name,
            types: result[pokemon.id] && result[pokemon.id].types ? [...result[pokemon.id].types, pokemon.type_pokemon] : [pokemon.type_pokemon]
        }
    })
    , {})




    console.log(newSimpleList)
    
    const params = Object.values(req.query)
    let finalRes=Object.values(newSimpleList)
    if(params.length!=0){
        finalRes = Object.values(newSimpleList).filter((pokemon)=>{
            let existParam=false
            for (let i = 0; i < params.length; i++) {
                const element = params[i];
                console.log(element)
                if(pokemon.types.includes(element)){
                    existParam=true
                }
            }
            return existParam
        })
    }
    console.log(params)
    
    

    //recorrer mi array de objetos, crear un nuevo objeto de cada
    //pokemon y si en el recorrido encuentra esa clave, que coja 
    //solamente el array (que voy a crear dentro del objeto) y lo pushee
    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: finalRes,
        
    })
}