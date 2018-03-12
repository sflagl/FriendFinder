
var path = require('path');

var friendMatch = require("../data/friend");

// ----------------------------------

module.exports = function(app) { // This shows all friend options

	app.get('/api/friends',function(req,res){

		res.json(friendMatch);

	});



// ----------------------------------

app.post("/api/friends", function(req, res) { // this will add new friends to the array


	// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).

	// Once the user completes the survey there responses will be placed in an object
	var userChoices = req.body;

	if (friendMatch.length < 5) {
	 friendMatch.push(req.body);
	  res.json(true);
	}
	else {
	  friendMatch.push(req.body);
	  res.json(false);
	}
});

// ----------------------------------

app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendMatch = [];

    console.log(friendMatch);
  });

}
