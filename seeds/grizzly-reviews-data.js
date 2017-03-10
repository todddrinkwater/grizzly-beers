
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {review_id: 1, beer_id: 1, rating: 3, comment: 'nice taste, very strong'},
        {review_id: 2, beer_id: 2, rating: 4, comment: 'Lovely Jubbly'},
        {review_id: 3, beer_id: 3, rating: 1, comment: 'piss poor'},
        {review_id: 4, beer_id: 3, rating: 5, comment: 'the best ever!!!'}
      ]);
    });
};
