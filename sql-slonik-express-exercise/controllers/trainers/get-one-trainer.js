const { selectOneTrainer } = require('../../queries/trainers');
const errors = require('../../errors');

module.exports = db => async (req, res, next) =>{
    const {trainername} = req.params;
    const result = await selectOneTrainer(db)(trainername)

    if(!result.ok){
        return next(errors[400])
    }

    res.status(200).json({
        success:true,
        data: result.data
    })

}