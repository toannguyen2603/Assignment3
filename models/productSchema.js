const { Schema } = require("mongoose");


const ProductSchema = new Schema ({
    name: {
        type: String,
        required: true, 
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = ProductSchema;