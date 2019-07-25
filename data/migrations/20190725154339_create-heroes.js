exports.up = function(knex, Promise) {
  return knex.schema.createTable('heroes', tbl => {
    tbl.increments('id');
    tbl.string('name', 128).unique();
    tbl.text('superpower').notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('heroes');
};
