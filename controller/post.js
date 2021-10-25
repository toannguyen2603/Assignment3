const ProductModel = require("../models/productModel");


module.exports = postProduct =  async (req, res) => {
    try {
        const product = new ProductModel({
            name:req.body.name,
            color:req.body.color,
            price:req.body.price
        });
        const result = await product.save();
        res.status(201).json('Create account successful');
        console.log(result);
    } catch(error){
        res.status(500).send(error);
    }
};