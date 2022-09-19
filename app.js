const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const port = 3007 || process.env.PORT
// app.use(cors())

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.use(require('./routes/route'))

app.listen(port)