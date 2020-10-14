const express = require('express')
const app = express()
const morgan = require('morgan')
const gameRoutes = require('./routes/gameRoutes.js')

require('dotenv').config()
const port = process.env.PORT || 8080

// general middleware
app.use(morgan('dev'))

// code required to use post method, must appear before route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route middleware
app.use('/api/v1/games', gameRoutes)

app.listen(port, () => {
    `listening on ${port}`
})