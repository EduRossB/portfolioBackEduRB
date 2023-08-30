require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/mongo')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.use('/',require('./routes/coments'))

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
})

dbConnect()