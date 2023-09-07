require('dotenv').config()
const express = require('express')
const dbConnect = require('../config/mongo')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.use('/api',require('../routes/coments'))
app.listen(port)


dbConnect()