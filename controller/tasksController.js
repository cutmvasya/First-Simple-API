const Tasks = require('../tasks.json');

const getTasks = (req,res) => {
    const result = [];

    Tasks.forEach((task) => result.push(task));

    res.status(200).json(...result);
}

module.exports = getTasks;