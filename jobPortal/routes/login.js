var express = require('express');
var router = express.Router();
var database = require('./condb');

/* GET home page. */
router.post('/', function(req, res, next) {

database.membersTable.find({email: req.body.email, password: req.body.password}, function(err, foundData){

  		if(err)
  		{
  			console.log("Error in Connecting to the membersTable");
  			console.log(err);
  			res.end("Internal MongoDBError");
  		}
  		else
  		{
  			if(foundData.length == 1)
  			{
  				req.session.email = foundData[0]['email'];
          		res.redirect('/profile');
  			}
  			else
  			{
  				res.redirect('/wronglogin');
  			}
  		}

  });

	
  

});

module.exports = router;
