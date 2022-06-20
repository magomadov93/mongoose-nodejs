const mongoose = require("mongoose");

const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
app.use(require("./routes/students.route"))

mongoose.connect("mongodb+srv://into:code@cluster0.rrbtn.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.use = require("./routes/students.route.js");

app.listen(port,function(){
    console.log(`server started http://localhost:${port}`)
})
