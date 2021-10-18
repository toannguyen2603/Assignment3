require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT)|| 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import routers
var postRouter = require('./router');

app.use('/api/', postRouter);



app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`)
})


