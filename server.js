// require express and bodyParser npm packages
var express = require("express");
var bodyParser = require("body-parser");

// create "express" server
var app = express();

// setup a port
var PORT = process.env.PORT || 8080;

// bodyparser  breakdowns data sent to server.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// waits for request then runs

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
