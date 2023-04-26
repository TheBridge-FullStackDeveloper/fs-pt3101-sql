const { sql } = require("slonik");

const selectAllPokemons = (pokemon) => sql.unsafe`
    SELECT id, name, types FROM pokemons
`;

module.exports = {
  selectAllPokemons,
};
