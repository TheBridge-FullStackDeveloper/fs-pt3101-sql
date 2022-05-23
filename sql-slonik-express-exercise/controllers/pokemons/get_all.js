const { selectAll } = require("../../queries/pokemons");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { type1, type2 } = req.query;

    const result = await selectAll(db)(type1, type2);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        data: result.data,
    });
};