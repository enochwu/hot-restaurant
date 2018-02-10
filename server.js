// * Create a basic server using Express.JS

// Dependencies
// ===========================================================
const express = require("express");
const baseAPI = require('./index.js')
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
var PORT = process.env.PORT || 3000;

console.log(baseAPI);

app.get('/api', baseAPI);
// app.get('/api/:char', (req, res) => { res.end() });
// app.get('/api/list', (req, res) => { res.end() });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});


app.listen(process.env.PORT || 3000, function() {
  console.log("App listening on PORT " + PORT);
});

//Endpoints. Maybe constructors.
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var obiwan = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 600,
  forcePoints: 1700
};
// * Create a few array variables that will hold the data
//
// * Create a set of routes for getting and posting table data
//
// * Create a set of routes for displaying the HTML pages
//
// * Use jQuery to run AJAX calls to GET and POST data from users to the Express serve

// Generate express connection
// Endpoints
// Data Store diffferent
