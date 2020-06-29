var exports = require('express')
var router = exports.Router()
var path = require('path')

//url routing
router.get('/', function(req, res, next) {
    console.log('main')
    res.sendFile(path.join(__dirname, "../public/main.html"))
})

module.exports = router;
