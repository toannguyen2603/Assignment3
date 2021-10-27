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

// path 
app.use('/api/', require('./routers/router'));


const specs = swaggerJsdoc(require('./api-docs/option'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs,{ explorer: true }));


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`)
})


