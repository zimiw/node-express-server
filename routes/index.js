var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'react-redux-webpack', host: "http://localhost:3007" });
});

router.get('/book/navigation', function (req, res, next) {
  fs.readFile("./data/" + "navigation.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
})

module.exports = router;
