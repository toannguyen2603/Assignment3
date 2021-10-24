const { model } = require('mongoose');
const ProductSchema = require('./productSchema');

module.exports = {
    ProductModel: model('products', ProductSchema)
};
