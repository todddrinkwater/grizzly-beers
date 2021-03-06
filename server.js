var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('./styles'))

// Routes

server.get('/', index.get)
server.get('/beerProfile/:id', index.getBeerProfile)
// server.get('/venueProfile', index.getVenueProfile)
// server.post('/beerProfile', index.addReview)
