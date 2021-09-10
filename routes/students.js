const StudentsController = require ('../controller/studentsController')
    , express            = require('express')
    , routes             = express.Router();

routes.get('/', StudentsController)

module.exports = routes;