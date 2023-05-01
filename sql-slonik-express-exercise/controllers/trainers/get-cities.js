const queries = require("../../queries/trainers");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
  const result = await queries.selectAllCities(await db)();

  if (!result)
    return next({
      ststusCode: 500,
      error: new Error("Something went wrong"),
    });

  res.status(200).json({
    data: result.data,
  });
};
