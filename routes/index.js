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

  .then(function(results){
    console.log(results)
    var data = {
      name: results[0].name,
      description: results[0].description,
      venues: results.map((row) => {return row.venue})
    }
    console.log(data);
  res.render('beerProfile', data)
  })
}

// function getVenueProfile (req, res){
//   db.getVenueProfile()
//     .then(function(venue){
//       res.render('venueProfile', {venue:venue})
//     })
// }
