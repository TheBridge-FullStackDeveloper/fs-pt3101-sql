const queries= require('../../models/leaders')


module.exports = (db) => async (req,res,next) => {

    const dbRes= await queries.selectName(await db)()
    console.log(dbRes)
    const leaderlist= dbRes.response
    const url=req.url
    const separate=url.split('/')
    const valueUrl= separate[1]
    console.log(url)
    console.log(separate)
    console.log(valueUrl)
    const filterName = leaderlist.find((leader)=> leader.name.includes(valueUrl) )

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('somenthing went wrong!'),
    })
    res.status(200).json({
        sucess: true,
        data: filterName,
    })
}