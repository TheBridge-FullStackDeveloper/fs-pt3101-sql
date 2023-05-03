const queries= require('../../models/pokemons')

module.exports = (db) => async (req,res,next) => {

    const dbRes= await queries.selectName(await db)()
    const pokemonlist = dbRes.response
    console.log(pokemonlist)

    const url=req.url
    const separate=url.split('/')
    const valueUrl= separate[1]
    console.log(url)
    console.log(separate)
    console.log(valueUrl)

    const onePokemon= pokemonlist.filter((pokemon)=>pokemon.name.includes(valueUrl) )
    console.log(onePokemon)


    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: onePokemon,
    })
}