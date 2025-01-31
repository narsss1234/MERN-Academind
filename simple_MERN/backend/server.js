import express from "express";
import bodyParser from "body-parser";
import uuid from "uuid/v4";

const app = express();
const port = 3000;

const DUMMY_PRODUCTS = [];

app.use(bodyParser.urlencoded({ extended : true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});