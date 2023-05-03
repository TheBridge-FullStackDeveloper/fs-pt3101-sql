
const queries= require('../../models/pokemons')

module.exports = (db) => async (req,res,next) => {

    const dbRes= await queries.selectParams(await db)()
    const pokemonlist = dbRes.response
    const newList=[]
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
    console.log('kknn')

    const url=req.url
    const separate=url.split('/')
    const valueUrl= separate[2]
    console.log(url)
    console.log(separate)
    console.log(valueUrl)

    const specificElement= Object.values(newSimpleList).filter((pokemon)=>pokemon.types.includes(valueUrl) )
    console.log(specificElement)


    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: specificElement,
    })
}