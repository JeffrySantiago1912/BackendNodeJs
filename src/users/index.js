const express = require('express');

const { UsersController } = require('./controller');

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router
    .get('/', UsersController.getUsers) // http://localhost:3000/api/products
    .get('/:id', UsersController.getUser) // http://localhost:3000/api/products/23
    .post('/', UsersController.createUser) // http://localhost:3000/api/products/65df486d9ed41ef5734dec5a
    .delete('/:id', UsersController.deleteUser); // http://localhost:3000/api/products/65df486d9ed41ef5734dec5a


    app.use('/api/users', router);
};