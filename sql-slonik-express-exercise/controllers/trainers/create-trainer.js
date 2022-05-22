const { createTrainer } = require('../../queries/trainers');
const errors = require('../../errors')


module.exports = db => async (req, res, next) => {
    const  trainer  = req.body;
    const result = await createTrainer(db)(trainer);
    if(!result.ok){
        return next(errors[400])
    }

    res.status(200).json({
        success:true,
        data: result.data
    })

}

