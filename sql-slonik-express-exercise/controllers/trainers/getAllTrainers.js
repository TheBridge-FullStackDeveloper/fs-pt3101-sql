const errors = require("../../misc/errors");
const {getAllTrainers} = require("../../models/trainers");

module.exports = (db) => async (req, res, next) => {
    const result = await getAllTrainers(await db)();

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}