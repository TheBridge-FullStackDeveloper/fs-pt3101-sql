const { selectByName } = require("../../queries/trainers");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const name = req.params.name;
    
    if (!name) {
        return next(errors[400]);
    };

    const result = await selectByName(db)(name);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        data: result.data,
    });
};