import * as Knex from 'knex';

const withTimeStamps = (table: Knex.CreateTableBuilder) => {
  table.timestamps(false, true);
};

exports.up = async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('password').notNullable();
    table.string('phone');
    table.string('address').notNullable();
    table.string('email').unique().notNullable();
    withTimeStamps(table);
  });
};

exports.down = async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
};
