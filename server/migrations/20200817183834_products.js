const Knex = require("knex");
/** @param {Knex} knex */

const withTimeStamps = (table) => {
  table.timestamps(false, true);
};

exports.up = async function up(knex) {
  await knex.schema.createTable("products", (table) => {
    table.uuid("id").notNullable().primary();
    table.string("name").notNullable().unique();
    table.string("description").notNullable();
    table.uuid("category_id").unsigned();
    table.foreign("category_id").references("categories.id");
    table.uuid("brand_id").unsigned();
    table.foreign("brand_id").references("brands.id");
    withTimeStamps(table);
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable("products");
};
