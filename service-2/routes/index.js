var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /FoodMenu to check the food items' });
});

router.get('/FoodMenu', function(req, res, next) {
                res.send("These are the items :<br/>Chicken Biryani - Rs.250 <br/>Mutton Biryani - Rs.300 <br/>Paneer Tikka Biryani - Rs.200 <br/>Veg Biryani - Rs.200 <br/>Chocolate Milk Shake - Rs.180");
               
});

module.exports = router;
