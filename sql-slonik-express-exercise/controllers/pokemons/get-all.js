const queries = require("../../queries/pokemons");
const errors = require("../../errors");

module.exports = (db) => async (req, res, next) => {
  const result = await queries.selectAll(await db)();

  if (!result.ok)
    return next({
      statusCode: 500,
      error: new Error("something went wrong!"),
    });

  res.status(200).json({
    success: true,
    data: result.response,
  });
};
