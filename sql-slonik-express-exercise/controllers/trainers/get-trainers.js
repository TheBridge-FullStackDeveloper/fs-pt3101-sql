const queries = require("../../models/trainers/index.js")


module.exports= (db) => async (req,res,next) =>{
    const dbRes = await queries.selectAllTrainers(await db)()

        if(!dbRes.ok)return next({
            statusCode:500,
            error:new Error('Something went wrong!'),
        })
    

        res.status(200).json({
            success: true,
            data: dbRes.response,
         })
}