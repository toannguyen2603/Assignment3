const ProductModel  = require("../models/productModel");

module.exports = deleteProduct = async (req, res) => {
    try {
        const post = await ProductModel.findById(req.params.id)
        
        if(!post){
            return res.status(400).json({msg: "Post not found"})
        }

        await post.remove();

        res.json({msg:'Post removed'});
    } catch (error) {
        res.status(500).json({error: {msg: "Server error"}});
    }
}
