const express = require('express');
const getProduct = require('../controller/get');
const postProduct = require('../controller/post');
const router = express.Router();

// @router      GET api/product
// @desc        Get all products   
// @access      Public
router.get('/get', getProduct);

// @router      POST api/product
// @desc        Create a product   
// @access      Private
router.post('/post', postProduct);

module.exports = router;