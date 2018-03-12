
var path = require('path'); // including path node module in file

var friendMatch = require("../data/friend.js"); // providing access to friend array in file

// ----------------------------------

module.exports = function(app) { // everything inside the function is being exported so that it will be accessible to other files

	// This shows all friend options

	app.get('/api/friends',function(req,res){

		res.json(friendMatch);

	});



// ----------------------------------

app.post("/api/friends", function(req, res) { // this will add new friends to the array

	// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).

	// Once the user completes the survey there responses will be placed in an object
	var userInput = req.body;y

}
