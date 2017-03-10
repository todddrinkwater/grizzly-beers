
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('beers').insert([
        {beer_id: 1, name: 'Red Hatter', type: 'IPA', description: 'Hoppy, moderately strong ale of golden-to-copper color'},
        {beer_id: 2, name: 'Hairy Legs', type: 'APA', description: 'A rather fruity beers with light malt flavors and a pleasantly dry and often bitter aftertaste'},
        {beer_id: 3, name: 'Big Paw', type: 'Brown Ale', description: 'Mellow but flavorful'},
        {beer_id: 4, name: 'Old Scruttocks', type: 'Bitter', description: 'Flavoursome and strong'},
        {beer_id: 5, name: 'Tipple Over', type: 'Irish Stout', description: 'A very dark, roasty beer with creamy mouthfeel'},
        {beer_id: 6, name: 'Golden Dawn', type: 'Blonde Ale', description: 'Brilliant light yellow to golden with a bleached white head'}
      ]);
    });
};
