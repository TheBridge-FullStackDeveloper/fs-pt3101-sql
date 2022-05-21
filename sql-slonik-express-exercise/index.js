const express = require('express')
const db = require('./configs/db')
const errors = require('./errors')
const { DEV_PORT } = require('./constants')
const app = express()

app.use(express.json())

app.use(require('./services')(db))

app.use((_, __, next) => {
    next(errors[404])
})

app.use(({ statusCode, error }, _, res, __) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

app.listen(process.env.PORT || DEV_PORT, () => {
    console.info('> listening at: ', process.env.PORT || DEV_PORT)
})