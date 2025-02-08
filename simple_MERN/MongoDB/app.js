const express = require('express');
const bodyParser = require('body-parser');

const { createProduct, getProducts } = require('./mongoose');

const app = express();
const port = 6000;

app.use(bodyParser.json());

app.get('/products', getProducts);

app.post('/products', createProduct);

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});