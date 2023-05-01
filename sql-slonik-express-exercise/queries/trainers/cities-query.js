const { sql } = require("slonik");

const selectCities = (city) => sql.unsafe`
SELECT * FROM LEADERS
`;

module.exports = {
  selectCities,
};
