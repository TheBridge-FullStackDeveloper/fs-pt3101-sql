const queries = require('../../models/trainers')

module.exports = (db)=> async (req, res, next) => {
    console.log(req.body)
    const dbRes = await queries.selectNew(await db)(req.body)
  console.log(dbRes)
   if (!dbRes.ok) {
        return next({
            statusCode:500,
            error: new Error('something went wrong')
        });
      }

    res.status(200).json({
        success : true,
        data: dbRes.response,
    })
}