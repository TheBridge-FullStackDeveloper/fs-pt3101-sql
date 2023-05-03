const queries = require('../../models/pokemons');

module.exports = (db) => async (req, res, next) => {
  const {types} = req.query

  // Si no se especifican tipos, se devuelve todos los pokémon
  if (!types) {
    const dbRes = await queries.selectAll(db)(typesArray);

    if (!dbRes.ok) {
      return next({
        statusCode: 500,
        error: new Error('something went wrong'),
      });
    }

    res.status(200).json({
      success: true,
      data: dbRes.response,
    });
  } else {
    // Si se especifican tipos, se hace una consulta para filtrar los pokémon
    const typesArray = Array.isArray(types) ? types : [types];

    const dbRes = await db.query(
      sql.unsafe`SELECT
        p.id,
        p.name,
        JSON_AGG(DISTINCT e.name ORDER BY e.name) AS types
      FROM
        pokemons AS p
        JOIN pokemons_elements AS pe ON p.id = pe.pokemon_id
        JOIN elements AS e ON pe.element_id = e.id
      WHERE
        e.name = ANY (${typesArray})
      GROUP BY
        p.id, p.name
      HAVING
        COUNT(DISTINCT e.name) = ${typesArray.length}
      ORDER BY
        p.id ASC`
    );

    if (!dbRes.rowCount) {
      return next({
        statusCode: 404,
        error: new Error('no se encontraron resultados'),
      });
    }

    res.status(200).json({
      success: true,
      data: dbRes.rows,
    });
  }
};
