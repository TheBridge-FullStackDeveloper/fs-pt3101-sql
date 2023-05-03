const queries= require('../../models/leaders')


module.exports = (db) => async (req,res,next) => {
    const dbname= req.body.name
    const dbBadge= req.body.badge
    const dbDes= req.body.description
    const dbCity= req.body.city
    console.log(dbname,dbBadge,dbDes,dbCity)

    const dbRes= await queries.addOneLeader(await db)(dbname,dbBadge,dbDes,dbCity)
   
    

//    console.log(req.body)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: dbRes.response
    })
}