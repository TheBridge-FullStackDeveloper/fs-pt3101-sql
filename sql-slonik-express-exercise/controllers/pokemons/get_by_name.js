const { selectByName } = require("../../queries/pokemons");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { name } = req.params;
    
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