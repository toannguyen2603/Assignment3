const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
const bodyParser = require('body-parser');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect database
connectDB();

app.get('/', (req, res) => {
    res.json('Hello world!')
})

// path 
app.use('/api/', require('./routers/router'));

// use the express-static middleware
app.use(express.static("public"))


const specs = swaggerJsdoc(require('./api-docs/option'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs,{ explorer: true }));


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`)
})


