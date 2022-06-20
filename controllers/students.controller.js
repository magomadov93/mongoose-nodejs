const students = require("../models/Student.model")

module.exports.studentsController = {
    
    
    getStudent:(req, res) => {
        students.find({})
            .then((data) => {
                 res.json(data)
            })
        },
        deleteStudent: (req, res) => {
            students.findByIdAndRemove(req.params.id)
            .then(() => {
                res.json("студент удален")
            })
        },

        patchStudent: (req, res) => {
            students.findByIdAndUpdate(req.params.id, {
                name: req.body.name
            })
        .then(() => {
            res.json("студент изменен")
        })
        },
    
    postStudent: (req, res) => {
          students.create(
             {name: req.body.name,
              phone: req.body.phone,
              age: req.body.age})
    .then(() => {
        res.json("Студент добавлен")
    })
}
}