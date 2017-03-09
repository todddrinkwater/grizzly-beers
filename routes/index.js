var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getBeerProfile: getBeerProfile,
  getVenueProfile: getVenueProfile
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getBeerProfile (req,res){
  console.log("Beer!!!");
  db.getBeerInfo()
    .then(function(beer){
      res.render('beerProfile',{name:"tuatara", description:"I like pizza", venueName: "EDA"})
  })
}

function getVenueProfile (req, res){
  db.getVenueProfile()
    .then(function(venue){
      res.render('venueProfile', {venue:venue})
    })
}
