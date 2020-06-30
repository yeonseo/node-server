var exp = require('express')
var app = exp()
var bodyParser = require('body-parser')
var router = require('./routers/index')
var cors = require('cors')

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

app.use(exp.static('public'))
app.use(exp.static('assets'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended:true}))
app.set('view engine', 'ets')
app.use(cors()) // Use this after the variable declaration

app.use(router)

