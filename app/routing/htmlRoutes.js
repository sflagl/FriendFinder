
// require path npm package
var path = require("path");


// export home and survey view
module.exports = function(app) {

  // this route shows the survey html file
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // this route shows the default to home html file
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
