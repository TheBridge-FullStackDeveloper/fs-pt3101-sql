const queries = require("../../models/trainers/index.js");

module.exports = (db) => async (req, res, next) => {
  const dbRes = await queries.selectAll(await db)();

  if (!dbRes.ok) {
    return next({
      statusCode: 500,
      error: new Error('Something went wrong!'),
    });
  }

  const { type1, type2 } = req.query;

  let filteredData = dbRes.response;

  if (type1) {
    filteredData = filteredData.filter((item) => {
      return item.type.includes(type1);
    });
  }

  if (type2) {
    filteredData = filteredData.filter((item) => {
      return item.type.includes(type2);
    });
  }

  res.status(200).json({
    success: true,
    data: filteredData,
  });
};
