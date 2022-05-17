const { selectByCity } = require("../../queries/trainers");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { city } = req.params;

    if (!city) {
        return next(errors[400]);
    };

    const result = await selectByCity(db)(city);

    if (!result.ok) {
        return next(errors[400]);
    };

    res.status(200).json({
        success: true,
        data: result.data,
    });
};