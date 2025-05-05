require('./mongo.js')
require('dotenv').config()

const express = require ('express')
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
const cors = require ('cors')
const app = express()
const signupRouter = require('./controllers/signup.js')
const notFound = require('./middlewares/notFound.js')
const handleError = require('./middlewares/handleError.js')
const loginRouter = require('./controllers/login.js')

app.use(cors())
app.use(express.json())

app.use('/api/signup', signupRouter)
app.use('/api/login', loginRouter)

app.use(notFound)
app.use(handleError)

const PORT = process.env.PORT || 3001

let server
if(require.main === module) {
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })   
}

module.exports = { app, server }
    