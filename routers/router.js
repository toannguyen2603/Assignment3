const express = require('express');
const getProduct = require('../controller/get');
const postProduct = require('../controller/post');
const router = express.Router();

router.get('/get', getProduct);
router.get('/port', postProduct);

module.exports = router;