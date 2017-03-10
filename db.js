var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getBeers,
  getBeer
}


function getBeers (testDb){
    var db = testDb || connection
    return db('beers')
    .select()
}

function getBeer (id, testDb) {
  var db = testDb || connection
  return db('beers')
  .join('venue-beers', 'venue-beers.beer_id', '=', 'beers.beer_id')
  .join('venues', 'venues.venue_id', '=', 'venue-beers.venue_id')
  //  .where('venue_beers.beers_id', 'beersbeers_id')
  .where('beers.beer_id', id)
  .select('beers.name', 'beers.description' , 'venues.name as venue')
}



// function getUsers (testDb) {
//   // Use a test database if one is passed in, or the connection defined above.
//   var db = testDb || connection
//   return db('users').select()
// }
//
// function getUser (id, testDb) {
//   var db = testDb || connection
//   return db('users').where('id', id)
// }
