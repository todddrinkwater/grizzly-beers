var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getBeerProfile: getBeerProfile,
  // getVenueProfile: getVenueProfile
}

function get (req, res) {
  db.getBeers()
    .then(function (beers) {
          res.render('index', { beers: beers })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getBeerProfile (req,res){
  var id = req.params.id
  db.getBeer(id)
  .select()
  .then(function(beer){
    console.log(beer);
  res.render('beerProfile', beer[0])
  })
}

// function getVenueProfile (req, res){
//   db.getVenueProfile()
//     .then(function(venue){
//       res.render('venueProfile', {venue:venue})
//     })
// }
