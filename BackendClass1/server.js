//Steps
// 1 create folder
// 2 npm init -y
// 3 npm i express
// 4re cate server.js

//creating server
const express = require('express')
const app = express();

//used to parse req.body in express in POST  or  PUT
const bodyParser = require('body-parser')

//specifically parse json data and add it to the request.body obj
app.use(bodyParser.json())


//activate the server at port 3000
app.listen(3000, ()=>{
    console.log("Server Started at port 3000")
})

//creating routes
app.get('/', (req, res)=>{
    console.log("Hi there")
    res.send("This is first backend class")
})

app.post('/api/cars', (req, res)=>{
    const {name, brand} = req.body;
    console.log(name)
    console.log(brand)
    res.send("Cars Submitted")
})


//connection of mongoDb with Express.js
//npm i mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    // useNewUrlParser:true,
    // useUnifiedTopology: true
})
.then(()=>{console.log("Connection successful")})
.catch((error)=>{console.log("received an error")})