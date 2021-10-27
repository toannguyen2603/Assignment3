const express = require('express');

const getProduct = require('../controller/get');
const postProduct = require('../controller/post');
const deleteProduct = require('../controller/delete');
const putProduct = require('../controller/put');

const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - color
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name products
 *         color:
 *           type: string
 *           description: The color products
 *         price:
 *           type: number
 *           description: Price of the products
 *       example:
 *         id: 123456
 *         name: Iphone 13
 *         color: Black
 *         price: 500000
 */

/**
  * @swagger
  * tags:
  *   name: Products
  *   description: The products managing API
*/


// @router      GET api/product
// @desc        Get all products   
// @access      Public

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A successful response
*/
router.get('/products', getProduct);

// @router      POST api/product
// @desc        Create a product   
// @access      Private


/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create new product
 *     tags: [Products]            
 *     responses:
 *       200:
 *         description: A successful response
 *       404:
 *         description: The product was not found
 *       500:
 *         description: Some error happened
*/
router.post('/product', postProduct);

// @router      DELETE api/:id product
// @desc        Delete a product   
// @access      Private



/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: The product was not found
 */
router.delete('/product/:id', deleteProduct);



// @router      PUT api/:id product
// @desc        Update a product   
// @access      Private

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update new product
 *     tags: [Products]
 *     parameters:
 *        - in: path
 *          name: _id
 *          schema:
 *             type: string
 *             required: true
 *             description: The book id
 *     requestBody:
 *          required: true
 *     responses:
 *       200:
 *         description: A successful response
 *       404:
 *         description: The product was not found
 *       500:
 *         description: Some error happened
*/
router.put('/products/:id', putProduct);

module.exports = router;