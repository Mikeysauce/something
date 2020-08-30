import Knex from 'knex';
const db = Knex({
  client: 'postgresql',
  connection: {
    database: 'pern',
    user: 'mikey',
    password: process.env.PGPASSWORD,
  },
  pool: {
    min: 0,
    max: 50,
  },
});

export { db };
