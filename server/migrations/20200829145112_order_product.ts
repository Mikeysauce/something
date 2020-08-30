import * as Knex from 'knex';

const withTimeStamps = (table: Knex.CreateTableBuilder) => {
  table.timestamps(false, true);
};

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('order_product', (table) => {
    table.uuid('id').notNullable().primary();
    table.uuid('order_id');
    table.foreign('order_id').references('orders.id').onDelete('CASCADE');
    table.uuid('product_id');
    table.foreign('product_id').references('products.id').onDelete('CASCADE');
    withTimeStamps(table);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('order_product');
}
