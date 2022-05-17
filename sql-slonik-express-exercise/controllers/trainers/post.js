const { postTrainer } = require("../../queries/trainers");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
    const { name, badge, description, city } = req.body;
    
    if (!name || !badge) {
        return next(errors[400]);
    };

    const result = await postTrainer(db)(name, badge, description, city);

    if (!result.ok) {
        return next(errors[400]);
    }

    res.status(200).json({
        success: true,
        message: `${name} added`
    });
};