const debug = require('debug')('app:module-users-controller')

const {UsersService} = require('./services');

const {Response} = require('../common/response');

const createError = require('http-errors');


module.exports.UsersController = {
    
    getUsers: async (req, res) => {
        try {

        let users = await UsersService.getAll();
        Response.success(res, 200, "Lista de Usuarios", users)

    } catch (error) {
            debug(error);
            Response.error(res);
        }
    },


    getUser: async (req, res) => {
        try {
            const { params : { id }, } = req;
            let user = await UsersService.getById(id);

            if(!user) {
                Response.error(res, new createError.NotFound());
            }

            else{
                Response.success(res, 200, `User ${id}`, user)
            }

        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },


    createUser: async (req, res) => {
        try {
            const { body } = req;

            if(!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }

            else {
                const insertedId = await UsersService.create(body);
                Response.success(res, 200, `User agregado`, insertedId)
            }

        } catch (error) {
           debug(error);
           Response.error(res);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { params: { id } } = req;
            const result = await UsersService.deleteById(id);
    
            if (result.deletedCount === 0) {
                Response.error(res, new createError.NotFound());
            } else {
                Response.success(res, 200, `User con ID ${id} eliminado correctamente`);
            }
    
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

};