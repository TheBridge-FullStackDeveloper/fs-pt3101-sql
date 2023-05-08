const queries = require('../../models/leaders')


module.exports = (db) => async (req, res, next) => {

    
   
    const resultTrainerNew = await queries.postLead(await db)(req.body)
    

    if(!resultTrainerNew.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
    })
}



