const { selectOne } = require('../../queries/pokemons')
const errors =  require('../../errors');


module.exports = db => async (req, res, next) =>{
    const {pokemonname} = req.params;
    const result = await selectOne(db)(pokemonname);

    if(!result.ok){
        return next(errors[400])
    }


    res.status(200).json({
        success: true,
        data: result.data
    })
}