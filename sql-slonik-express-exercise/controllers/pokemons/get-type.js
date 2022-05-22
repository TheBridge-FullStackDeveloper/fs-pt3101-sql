const { selectType } = require('../../queries/pokemons');
const errors = require('../../errors');

module.exports = db => async (req, res, next) =>{
    const {type} = req.params;
    console.log(type)
    const result = await selectType(db)(type);

    if(!result.ok) {
        return next(errors[400])
    }

    res.status(200).json({
        success: true,
        data: result.data
    })
}