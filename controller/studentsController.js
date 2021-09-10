const Students = require ('../students.json')

const getStudents = (req,res) => {
    const result = [];

    Students.forEach((student) => result.push(student));

    res.status(200).json(...result);
}

module.exports = getStudents;