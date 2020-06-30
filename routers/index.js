var exp = require('express')
var app = exp()
var router = exp.Router()
var bodyParser = require('body-parser')
var path = require('path')
var mainRouter = require('./main/router_main')
var userRouter = require('./user/router_user')

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"))
})

router.use('/main', mainRouter)
router.use('/user', userRouter)

module.exports = router;