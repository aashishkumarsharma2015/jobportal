var express = require('express');
var router = express.Router();
var database = require('./condb');

/* GET home page. */
router.post('/', function(req, res, next) {

	var newMember = new database.membersTable();

	newMember.email = req.body.email;
	newMember.password = req.body.password;
	newMember.reg = req.body.reg;



	newMember.save(function(err, savedObject){

		if(err)
		{
			console.log(err);
			res.end('error connecting in mongoDB');
		}
		else
		{
			res.redirect('/submitted');
		}

	});
  

});

module.exports = router;
