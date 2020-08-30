import Knex from 'knex';

const withTimeStamps = (table: Knex.CreateTableBuilder) => {
  table.timestamps(false, true);
};

exports.up = async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('name').notNullable().unique();
    table.float('price').notNullable();
    table.string('description').notNullable();
    table
      .uuid('category_id')
      .unsigned()
      .references('categories.id')
      .onDelete('CASCADE');
    table
      .uuid('brand_id')
      .unsigned()
      .references('brands.id')
      .onDelete('CASCADE');
    withTimeStamps(table);
  });
};

exports.down = async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products');
};
