var express = require('express');
var app = express();
var controller = require('./routing/controller')
var apiRoutes = require(path.join(__dirname, './routing/apiRoutes'))

var htmlRoutes = require(path.join(__dirname, './routing/htmlRoutes'));
// ----------------------------------

var bodyParser = require('body-parser')

var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());


// note: DATA from the SERVER comes in one long STRING then once "PARSED" it is converted into a JS OBJECT
//

// ----------------------------------

var PORT = process.env.PORT || 8080;

// ----------------------------------

apiRoutes(app)
htmlRoutes(app)


/*
https://stackoverflow.com/questions/35048686/difference-between-path-resolve-and-path-join-invocation/45542259
*/
// ----------------------------------

app.use(express.static(path.join(__dirname, './public')));

// app.get('/', controller.home);





// ----------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// console.log('here');
