const ProductModel = require("../models/productModel");


module.exports = postProduct =  async (req, res) => {
    try {

        const product = new ProductModel({
            name:req.body.name,
            color:req.body.color,
            price:req.body.price
        });

        const result = await product.save();

        res.status(201).json({msg: 'Create document successful'});

        console.log(result);

        res.json(result);
        
    } catch(error){
        res.status(500).json({error: {msg: "Server error"}});
    }
};