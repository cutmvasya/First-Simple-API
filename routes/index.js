const express = require ('express')
    , router = express.Router()
    , studentsRoute = require ('./students')
    , tasksRoute = require ('./tasks');

router.use('/students', studentsRoute);
router.use('/tasks', tasksRoute);

module.exports = router;