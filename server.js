const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect database
connectDB();

// path 
app.use('/api/', require('./routers/router'));


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`)
})


