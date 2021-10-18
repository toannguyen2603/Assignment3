require('dotenv').config();
const express = require('express');
const router = express.Router();
const mydb = require('./database/mongoose');


router.get('/products', async (req, res) => {
    try {
        var product = new mydb(req.body);
        var result = await product.save();
        res.send(result);
    } catch(error){
        res.status(500).send(error);
    }
});

router.get("/insert", async (req, res) => {
    try {
        var result = await mydb.find().exec();
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;