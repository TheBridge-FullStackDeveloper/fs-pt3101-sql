const queries= require('../../models/elements')


module.exports = (db) => async (req,res,next) => {

    const dbRes= await queries.selecTypesRes(await db)()
    console.log(dbRes)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: dbRes.response,
    })
}