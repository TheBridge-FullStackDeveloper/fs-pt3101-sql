const { selectByType } = require("../../queries/pokemons");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { type } = req.params;
    
    if (!type) {
        return next(errors[400]);
    };

    const result = await selectByType(db)(type);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        data: result.data,
    });
};