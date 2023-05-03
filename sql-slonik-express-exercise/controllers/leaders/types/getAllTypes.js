const errors = require("../../misc/errors");
const { getAllTypes } = require("../../models/types");

//Ejercicio 4
module.exports = (db) => async (req,res,next) => {
    const result = await getAllTypes(await db)();

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}