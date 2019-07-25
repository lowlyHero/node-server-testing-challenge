
exports.seed = function(knex, Promise) {
  return knex('heroes').truncate()
    .then(function () {
      return knex('heroes').insert([
        {id: 1, name: 'Iron Man', superpower: 'Billionaire, genius, playboy, philanthropist'},
        {id: 2, name: 'Spider-Man', superpower: 'Super-human strength. Ability to cling to walls.'},
        {id: 3, name: 'Thor', superpower: 'Control wind, rain, and lightning.'}
      ]);
    });
};
