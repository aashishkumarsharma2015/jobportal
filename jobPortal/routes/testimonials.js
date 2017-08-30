var express = require('express');
var router = express.Router();
var database = require('./condb');

/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('testimonials', {});

});

module.exports = router;
