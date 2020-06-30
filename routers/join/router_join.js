var exports = require('express')
var router = exports.Router()
var path = require('path')

// mysql setting
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '192.168.0.20',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'testdb_node'
});
connection.connect();


//url routing
router.get('/', function(req, res, next) {
    console.log('join')
    res.sendFile(path.join(__dirname, "../../public/join.html"))
})

router.post('/', function(req, res) {
    console.log(req.body)
    var body = req.body
    var email = body.email
    var password = body.password

    var sql = {email : email, password : password}
    var query = connection.query('insert into users set ?', sql
    , function(err, rows) {
        if(err) throw err;
        // res.send("<h1>Hi! " + req.body.email + "</h1>")
        else res.render('welcome.ejs', {'id' : rows.insertId ,'email' : email})
    })
    
})

module.exports = router;
