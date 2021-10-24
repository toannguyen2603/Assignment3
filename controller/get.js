const { ProductModel } = require("../models");

module.exports = getProduct = async (req, res) => {
    try {
        
        const result = await ProductModel.find({product}).exec();
        if(!result) {
            return res.status(400).json({error: {msg: "Product not found"}})
        }
        res.send(result);
    } catch (error) {
        res.status(500).json({error: {msg: "Server error"}});
    }
}
