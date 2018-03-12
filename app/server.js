var express = require('express');
var app = express();

// ----------------------------------

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

// ----------------------------------

var path = require('path');


// note: DATA from the SERVER comes in one long STRING then once "PARSED" it is converted into a JS OBJECT
//

// ----------------------------------

var PORT = process.env.PORT || 8080;

// ----------------------------------

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// ----------------------------------

app.use(express.static(path.join(__dirname, './app/public')));

// ----------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// console.log('here');
