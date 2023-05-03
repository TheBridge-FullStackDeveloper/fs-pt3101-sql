const errors = require("../../misc/errors");
const {addNewTrainer} = require("../../models/trainers");

//Ejercicio 9
module.exports = (db) => async (req,res,next) => {
    const result = await addNewTrainer(await db)(req.body);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}