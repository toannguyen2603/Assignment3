require('dotenv').config();

const express = require('express');
const connectDB = require('./config/connectDB');

const app = express();
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT) || 8000

// Import routers
var pathRouter = require('./routers/router');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// path 
app.use('/api/', pathRouter);


connectDB();

app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`)
})


