
exports.up = function(knex, Promise) {
  return knex.schema.createTable("fruits", tbl => {
      // Creating a Table Here//
      tbl.increments();
      //name, aveWeightOz, delicious
      tbl.text("name", 128).unique().notNullable();
      tbl.float("avgWeightOz").notNullable();
      tbl.boolean("delicious").defaultTo(false);
      
  })
};

exports.down = function(knex, Promise) {
  //Destruct table Here//
  return knex.schema.dropTableIfExists("fruits");
};
