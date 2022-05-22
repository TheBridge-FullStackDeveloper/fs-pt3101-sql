const { updatePokemons } = require('../../queries/trainers');
const errors =  require('../../errors');


module.exports = db => async (req, res, next) =>{
    
    const { pokemons } = req.body;
    const { trainersName } = req.params;
    const result = await updatePokemons(db)(pokemons, trainersName);

    if(!result.ok){
        return next(errors[400])
    }

    res.status(200).json({
        success: true,
        data: result
    })
}