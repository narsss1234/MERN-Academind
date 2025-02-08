const mongoose = require('mongoose');

const ProductSchema = require('./models/products');

const uri = "mongodb+srv://mern:adminadmin1234@cluster0.0b4vnjq.mongodb.net/test-mern?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri).then(() => {
    console.log('Connected to Database!')
}).catch(() => {
    console.log('Connection lost!')
});

const createProduct = async (res, req, next) => {
    const createdProduct = new ProductSchema({
        name: req.body.name,
        price: req.body.price
    });

    try {
        const result = await createdProduct.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProducts = async (res, req, next) => {
    
    try {
        const products = ProductSchema.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;