const queries= require('../../models/leaders')


module.exports = (db) => async (req,res,next) => {

    const dbRes= await queries.selectAll(await db)()
    console.log(dbRes.response.length)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: dbRes.response,
    })
}