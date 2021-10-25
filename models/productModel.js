const  mongoose  = require('mongoose');
const ProductSchema = require('./productSchema');

module.exports = productModel = mongoose.model('products', ProductSchema)

