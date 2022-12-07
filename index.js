const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.PORT || 5000;


const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Coding School Server is Running');
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseNo = course?.find(cours => cours._id === id);
    res.send(courseNo)
})

app.get('/all-course', (req, res) => {
    res.send(course)
})

app.listen(Port, () => {
    console.log(' Server running on port', Port);
})




module.exports = app;



