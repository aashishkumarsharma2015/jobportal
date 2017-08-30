var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/jobPortal");

var membersSchema = mongoose.Schema({

    email : String, 
    password : String,
    reg : String
});



var membersTable = mongoose.model('members', membersSchema);


module.exports.membersTable = membersTable;


