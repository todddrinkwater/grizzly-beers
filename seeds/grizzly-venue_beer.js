
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venue-beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('venue-beers').insert([
        {id: 1, beer_id: 1, venue_id: 1},
        {id: 2, beer_id: 1, venue_id: 2},
        {id: 3, beer_id: 1, venue_id: 3},
        {id: 4, beer_id: 2, venue_id: 1},
        {id: 5, beer_id: 2, venue_id: 2},
        {id: 6, beer_id: 2, venue_id: 4},
        {id: 7, beer_id: 3, venue_id: 4},
        {id: 8, beer_id: 3, venue_id: 5},
        {id: 9, beer_id: 3, venue_id: 6},
        {id: 10, beer_id: 3, venue_id: 1},
        {id: 11, beer_id: 4, venue_id: 2},
        {id: 12, beer_id: 4, venue_id: 3},
        {id: 13, beer_id: 4, venue_id: 6},
        {id: 14, beer_id: 5, venue_id: 6},
        {id: 15, beer_id: 5, venue_id: 5},
        {id: 16, beer_id: 6, venue_id: 3},
        {id: 17, beer_id: 6, venue_id: 4},
        {id: 18, beer_id: 6, venue_id: 5},
        {id: 19, beer_id: 6, venue_id: 1}
      ]);
    });
};
