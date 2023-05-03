const express= require('express')
const bodyParser = require('body-parser');
const db = require('./configs/db')
const app = express()

app.use(express.json());
app.use(require('./routes')(db))

app.use((req,res,next) => {
    next({
        statusCode: 404,
        error: new Error('Path not found')
    })
})

app.use(({statusCode, error}, req,res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message
    })
})

app.listen(4000, () => console.info(`> listening at ${4000}`))

