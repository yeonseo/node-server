var exports = require('express')
var router = exports.Router()
var path = require('path')

//url routing
router.get('/email', function(req, res, next) {
    console.log('email_post')
    res.sendFile(path.join(__dirname, "../public/formEmail.html"))
})

router.post('/email_check', function(req, res) {
    console.log(req.body)
    // res.send("<h1>Hi! " + req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})
})

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
// connection.query('SELECT * from users', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
// });
// connection.end();

router.post('/ajax_send_email', function(req, res) {
    console.log(req.body)
    var email = req.body.email
    // var responeData = {'result' : 'ok', 'email' : req.body.email}
    var responeData = {}

    var query = connection.query('select email from users where email="' + email + '"'
    , function(err, rows) {
        if(err) throw err;
        if(rows[0]) {
            responeData.result = "ok"
            responeData.email = rows[0].email
            console.log(rows[0].email)
        } else {
            responeData.result = "none"
            responeData.email = ""
        }
        res.json(responeData)
    })
})


module.exports = router;
