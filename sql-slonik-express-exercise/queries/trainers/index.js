const { selectAllTrainers } = require("./queries");

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

module.exports = {
  selectAll,
};
