exports.up = function(knex, Promise) {
    return knex.schema.table('beers', function (table) {
      table.string('type')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('beers').dropColumn('type')
};
