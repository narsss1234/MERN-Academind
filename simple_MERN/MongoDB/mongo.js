const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://mern:adminadmin1234@cluster0.0b4vnjq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };

    const client = new MongoClient(uri);

    try{
        await client.connect();
        await client.db("mern").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const db = client.db();
        const result = await  db.collection('products').insertOne(newProduct);
        res.json({message: newProduct});
    } catch(error){
        return res.json({message: error});
    } finally {
        await client.close();
    }
};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(uri);
    let products;

    try{
        await client.connect();
        await client.db("mern").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const db = client.db();
        products = await  db.collection('products').find().toArray();
        res.json(products);
    } catch(error){
        return res.json({message: error});
    } finally {
        await client.close();
    }

};

exports.createProduct = createProduct;
exports.getProducts = getProducts;