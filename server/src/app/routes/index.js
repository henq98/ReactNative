const routes = require('express').Router();

routes.use('/user', require('./user'));
routes.use('/project', require('./project'));

module.exports = routes;
