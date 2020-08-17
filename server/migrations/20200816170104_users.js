const Knex = require("knex");
/** @param {Knex} knex */

const withTimeStamps = (table) => {
  table.timestamps(false, true);
};

exports.up = async function up(knex) {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").notNullable().primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("password").notNullable();
    table.string("phone");
    table.string("address").notNullable();
    table.string("email").unique().notNullable();
    withTimeStamps(table);
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable("users");
};
