const queries = require("../../models/trainers/index.js");

module.exports = (db) => async (req, res, next) => {
  const type = req.params.type;
  console.log(req.params.type)
  const dbRes = await queries.onlyType(await db)(type);

  if (!dbRes.ok) {
    return next({
      statusCode: 500,
      error: new Error("Something went wrong!"),
    });

  }
  res.status(200).json({
    success: true,
    data: dbRes.response,
  });
};
