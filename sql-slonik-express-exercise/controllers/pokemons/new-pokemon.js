const { newPokemon } = require('../../queries/pokemons')
const errors = require('../../errors')

module.exports = db => async(req, res, next)=>{
    const  pokemoninfo  = req.body;
    const result = await newPokemon(db)(pokemoninfo);

    if(!result.ok){
        return next(errors[400])
    }

    res.status(200).json({
        success: true,
        data: result
    })
}