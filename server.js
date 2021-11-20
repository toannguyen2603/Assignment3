const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();

const PORT = process.env.PORT || 8000;

const bodyParser = require('body-parser');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect database
connectDB();

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.json("Hello world!");
});

// path
app.use("/api/", require("./routers/router"));
=======

app.get('/', (req, res) => {
    res.json('Hello world!')
})

// path 
app.use('/', require('./routers/router'));
>>>>>>> 78e481ec8f73f2e56ce562f7baf01d2f23d55926

// use the express-static middleware
app.use(express.static("public"));

const specs = swaggerJsdoc(require("./api-docs/option"));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
