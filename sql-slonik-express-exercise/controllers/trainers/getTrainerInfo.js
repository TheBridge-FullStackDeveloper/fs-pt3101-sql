const errors = require("../../misc/errors");
const { getTrainerInfo } = require("../../models/trainers");

module.exports = (db) => async (req, res, next) => {
	const result = await getTrainerInfo(await db)(req.params.name);

	if(!result.ok) return next(errors[500]);

	res.status(200).json({
		success: true,
		data: result.data
	})
}