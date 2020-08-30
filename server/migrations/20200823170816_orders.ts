import * as Knex from 'knex';

const withTimeStamps = (table: Knex.CreateTableBuilder) => {
  table.timestamps(false, true);
};

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('status').notNullable();
    table.string('tracking_code').notNullable();
    table.string('delivery_address').notNullable();
    table.string('billing_address').notNullable();
    table.uuid('user_id').unsigned().references('users.id').onDelete('CASCADE');
    withTimeStamps(table);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('orders');
}
