const express = require('express');

const { ProductsController } = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
    .get('/', ProductsController.getProducts) // http://localhost:3000/api/products
    .get("/report", ProductsController.generateReport) // http://localhost:3000/api/products/report
    .get('/:id', ProductsController.getProduct) // http://localhost:3000/api/products/23
    .post('/', ProductsController.createProduct) // http://localhost:3000/api/products/65df486d9ed41ef5734dec5a
    .delete('/:id', ProductsController.deleteProduct); // http://localhost:3000/api/products/65df486d9ed41ef5734dec5a


    app.use('/api/products', router);
};