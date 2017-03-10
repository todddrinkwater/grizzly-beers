exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('beers', function (table) {
      table.increments('beer_id').primary()
      table.string('name')
      table.string('description')
      table.string('image')

    }),
    knex.schema.createTable('venues', function (table) {
      table.increments('venue_id').primary()
      table.string('name')
      table.string('address')
    }),
    knex.schema.createTable('venue-beers', function (table) {
      table.increments('id').primary()
      table.integer('beer_id')
      table.integer('venue_id')
    }),
    knex.schema.createTable('reviews', function (table) {
      table.increments('review_id').primary()
      table.integer('beer_id')
      table.integer('rating')
      table.string('comment')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('beers'),
      knex.schema.dropTable('venues'),
      knex.schema.dropTable('venue_beers'),
      knex.schema.dropTable('reviews')
  ])
};
