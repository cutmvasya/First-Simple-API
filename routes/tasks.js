const TasksController = require('../controller/tasksController')
    , express         = require('express')
    , routes          = express.Router();

routes.get('/', TasksController);

module.exports = routes;