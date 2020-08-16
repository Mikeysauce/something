const Knex = require("knex");
/** @param {Knex} knex */

exports.up = async function up(knex) {
  await knex.schema.createTable("testies", (table) => {
    table.uuid("id").notNullable().primary();
    table.string("email").notNullable();
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable("testies");
};
