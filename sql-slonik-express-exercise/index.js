require('dotenv').config()
const { v4: uuidv4 } = require("uuid")

const port = process.env.PORT
const dbUrl = process.env.DB_URL
const secret = process.env.SECRET


const express = require("express")
const cookieParser = require('cookie-parser')
const db = require('./config/db')
const app = express()



app.use(express.json())
app.use(cookieParser())

const routes = require('./routes')

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
        message: error.message,
    })
})

app.listen(process.env.PORT, () => console.info(`> listening at: ${process.env.PORT}`));
