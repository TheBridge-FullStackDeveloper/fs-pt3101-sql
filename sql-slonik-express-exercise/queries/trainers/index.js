const { selectAllTrainers } = require("./queries");
const { selectCities } = require("./cities-query");

const selectAll = (db) => async () => {
  try {
    const response = await db.query(selectAllTrainers());

    return {
      response: response.rows,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

const selectAllCities = (db) => async () => {
  try {
    const cities = await db.query(selectCities());

    return {
      response: cities.rows,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

module.exports = {
  selectAll,
  selectAllCities,
};
