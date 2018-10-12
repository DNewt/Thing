exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('carts', table => {
      table.increments('id');
      table.string('savedcart');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('carts');
  };
  