// * Create a basic server using Express.JS

// Dependencies
// ===========================================================
const express = require("express");
const baseAPI = require('./index.js');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(baseAPI);

var reservations = [
  {
    routeName: "tim",
    name: "Tim Cooley",
    email: "xyz@xyz.com",
    phone: '555-555-5555'
  },
  {
    routeName: "2",
    name: "Tim Cooley",
    email: "xyz@xyz.com",
    phone: '555-555-5555'
  },
  {
    routeName: "3",
    name: "Tim Cooley",
    email: "xyz@xyz.com",
    phone: '555-555-5555'
  },
  {
    routeName: "4",
    name: "Tim Cooley",
    email: "xyz@xyz.com",
    phone: '555-555-5555'
  }
];

// app.get('/api', baseAPI);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Search for Specific Character (or all reservations) - provides JSON
app.get("/api/:reservations?", function(req, res) {
  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }

    return res.json(false);
  }
  return res.json(reservations);
});

// Create New reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  reservations.push(newreservation);

  res.json(newreservation);
});

console.log(reservations[0]);


app.listen(process.env.PORT || 3000, function() {
  console.log("App listening on PORT " + PORT);
});
5
