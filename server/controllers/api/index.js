const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
// apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/plants', require('./plantsController'));

module.exports = apiControllers;
    