const ProductModel = require("../models/productModel");

module.exports = putProduct = async (req, res) => {
    try {

        var data = {
            name:req.body.name,
            color:req.body.color,
            price:req.body.price
        }
        const post = await ProductModel.findByIdAndUpdate(req.params.id, data);

        await post.save();

        res.json(post);

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

