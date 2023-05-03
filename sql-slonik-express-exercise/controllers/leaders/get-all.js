const queries = require('../../models/leaders') 


module.exports = (db) => async (req, res, next) => {
  const dbRes = await queries.selectAll(await db)()

  if(!response.ok) return next({
    statusCode: 500,
    error: new Error('no funciona')
  }) 

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
}

