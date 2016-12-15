var express = require('express');
var router = express.Router();
var fs = require("fs");

var nav = require('../data/navigation.json')
var bookList = require('../data/bookList.json')

/* model */
var Navigation = require('../models/Navigation')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'react-redux-webpack', host: "http://localhost:3011" });
});

router.get('/book/navigation', function (req, res, next) {
  for (let i = 0; i < 9; i++) {
    nav.push()
  }
  return res.send(nav);
})

router.get('/book/list', function (req, res, next) {
  return res.send(bookList);
})

module.exports = router;
