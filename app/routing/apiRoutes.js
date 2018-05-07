// require all friend options
var friends = require("../data/friends");

// export function
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

 // matching the preset friends scores with the users scores to find a match
  app.post("/api/friends", function(req, res) {


    var friendMatch = {
      name: "",
      photo: "",
      friendDiff: Infinity
    };


    var userData = req.body;
    var userScores = userData.scores;

    // the diff between userScore and friends
    var totalDiff;


    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDiff = 0;

      console.log(currentFriend.name);

   
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDiff <= friendMatch.friendDiff) {
        friendMatch.name = currentFriend.name;
        friendMatch.photo = currentFriend.photo;
        friendMatch.friendDiff = totalDiff;
      }
    }

    friends.push(userData);

    res.json(friendMatch);
  });
};
