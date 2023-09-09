require('dotenv').config()
const express = require('express')
const dbConnect = require('../config/mongo')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    // Genera la respuesta HTML directamente en esta función
    const htmlResponse = `
      <html>
        <head>
          <title>Mi Página Principal</title>
        </head>
        <body>
          <h1>Bienvenido a mi página principal</h1>
          <p>Este es un ejemplo de respuesta HTML generada dinámicamente.</p>
        </body>
      </html>
    `;
  
    // Envía la respuesta HTML al cliente
    res.send(htmlResponse);
  });

app.use('/api',require('../routes/coments'))
app.listen(port)


dbConnect()