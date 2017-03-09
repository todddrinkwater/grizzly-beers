
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {venue_id: 1, name: 'Rogue', address: 'Wellington'},
        {venue_id: 2, name: 'Third Eye', address: 'Wellington'},
        {venue_id: 3, name: 'Little Beer Quarter', address: 'Wellington'},
        {venue_id: 4, name: 'Hashigo Zake', address: 'Wellington'}
      ]);
    });
};
