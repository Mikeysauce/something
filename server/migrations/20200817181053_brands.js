const Knex = require("knex");
/** @param {Knex} knex */

const withTimeStamps = (table) => {
  table.timestamps(false, true);
};

exports.up = async function up(knex) {
  await knex.schema.createTable("brands", (table) => {
    table.uuid("id").notNullable().primary();
    table.string("name").notNullable().unique();
    table.string("country").notNullable().unique();
    table.string("description").notNullable();
    withTimeStamps(table);
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable("brands");
};
