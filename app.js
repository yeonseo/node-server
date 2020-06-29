var exp = require('express')
var app = exp()
var bodyParser = require('body-parser');

const express = require('express');
var cors = require('cors')

var mainRouter = require('./routers/router_main')
var userRouter = require('./routers/router_user')

app.listen(3000, function() {
    console.log("start! express server on port 3000");
})

app.use(express.static('public'))
app.use(express.static('assets'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({
    extended:true
}))
app.set('view engine', 'ets')
app.use(cors()) // Use this after the variable declaration

app.use('/main', mainRouter)
app.use('/user', userRouter)

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/main.html")
})


