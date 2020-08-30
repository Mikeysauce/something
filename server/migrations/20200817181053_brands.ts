import * as Knex from 'knex';

const withTimeStamps = (table: Knex.CreateTableBuilder) => {
  table.timestamps(false, true);
};

exports.up = async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('brands', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('name').notNullable().unique();
    table.string('country').notNullable().unique();
    table.string('description').notNullable();
    withTimeStamps(table);
  });
};

exports.down = async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('brands');
};
