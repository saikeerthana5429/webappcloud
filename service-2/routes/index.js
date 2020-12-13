var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availablerides to check the available rides' });
});

router.get('/availablerides', function(req, res, next) {
                res.send("These are the available rides :<br/>Ride no 1: from kollam to chennai <br/>Ride no 2: from banglore to chennai <br/>Ride no 3: from anantapur to hyderabad <br/>Ride no 4: from kollam to bangalore");
               
});

module.exports = router;
