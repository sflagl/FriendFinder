
var friendMatch = require("../data/friend");

// ----------------------------------

module.exports = function(app) {

	app.get('/api/friends',function(req,res){

		res.json(friendMatch);

	});



// ----------------------------------

app.post("/api/friends", function(req, res) {

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
