const express = require('express')
const db = require('./configs/db')
const app = express()
const morgan = require('morgan')

const routes = require('./routes')
app.use(morgan('dev'))
app.use(express.json())
app.use(routes(db))


app.use((req, res, next) => {
    next({
        statusCode: 404,
        error: new Error('path not found'),
    })
})

app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        messasge: error.message,
    })
})

app.listen(process.env.PORT, () => console.info(`> listening at ${process.env.PORT}`))