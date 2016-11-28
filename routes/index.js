var express = require('express');
var router = express.Router();
var fs = require("fs");

var nav = require('../data/navigation.json')

/* model */
var Navigation = require('../models/Navigation')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'react-redux-webpack', host: "http://localhost:3007" });
});

router.get('/book/navigation', function (req, res, next) {
  for (let i = 0; i < 9; i++) {
    nav.push()
  }
  return res.send(nav);
})

module.exports = router;
