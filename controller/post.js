const { ProductModel } = require("../models");


module.exports = postProduct =  async (req, res) => {
    try {
        var product = new ProductModel(req.body);
        var result = await product.save();
        res.send(result);
        console.log(result);
    } catch(error){
        res.status(500).send(error);
    }
};