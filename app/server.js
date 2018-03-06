var express = require('express');
var app = express();

// ----------------------------------

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ----------------------------------

var PORT = process.env.PORT || 8080;

// ----------------------------------

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// ----------------------------------


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// console.log('here');