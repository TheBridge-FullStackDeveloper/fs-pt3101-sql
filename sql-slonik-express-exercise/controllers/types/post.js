const { postType } = require("../../queries/types");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { names } = req.body;
    
    if (!names) {
        return next(errors[400]);
    };

    const result = await postType(db)(names);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        message: `Types added`
    });
};