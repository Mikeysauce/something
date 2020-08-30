import Knex from 'knex';
import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import faker from 'faker';

const makeSalt = async () => await bcrypt.genSalt(10);

const category_id = v4();
const brand_id = v4();

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  brand_id: string;
  category_id: string;
}

const makeTestacc = async () => ({
  id: v4(),
  first_name: 'Michael',
  last_name: 'Shelton',
  password: await bcrypt.hash('yup', await makeSalt()),
  phone: '013333 310586',
  address: '28 Rodger Street, Cellardyke',
  email: 'the.mikex@gmail.com',
});

const makeUser = async () => ({
  id: v4(),
  first_name: 'Michael',
  last_name: 'Shelton',
  password: await bcrypt.hash('yup', await makeSalt()),
  phone: '013333 310586',
  address: '28 Rodger Street, Cellardyke',
  email: faker.internet.email(),
});

const makeOrder = async (user: any) => {
  const sameAddress = faker.address.streetAddress();
  const d = {
    id: v4(),
    user_id: user.id,
    status: faker.random.arrayElement([
      'Processing',
      'Out for delivery',
      'Delivered',
    ]),
    updated_at: faker.date.past(),
    tracking_code: faker.internet.mac(),
    billing_address: sameAddress,
    delivery_address: sameAddress,
  };
  // console.log(d);
  return d;
};

const orderProduct = async (orders, key, products) => {
  let result = [];
  for (let x = 0; x < faker.random.number(12); x++) {
    const product: Product = faker.random.arrayElement(products);

    const productOrder = {
      id: v4(),
      order_id: orders[key].id,
      product_id: product.id,
    };
    result.push(productOrder);
  }
  // console.log(result);
  return result;
};

const makeBrand = async () => ({
  id: brand_id,
  name: 'Ruthless',
  country: 'United States of America',
  description: 'One of the most popular brands etc',
});

const makeCategory = async () => ({
  id: category_id,
  name: 'Short fill',
  description: 'Like a long fill, but short',
});

const makeProduct = async (): Promise<Product> => ({
  id: v4(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.company.catchPhraseDescriptor(),
  brand_id,
  category_id,
});

exports.seed = async function (knex: Knex): Promise<void> {
  // Prepare seed data
  const tables = ['users', 'products', 'brands', 'categories'];
  const users = await Promise.all(new Array(20).fill(Number).map(makeUser));
  const brands = await makeBrand();
  const categories = await makeCategory();
  const products = await Promise.all(
    new Array(20).fill(Number).map(makeProduct)
  );
  const orders = await Promise.all(
    new Array(20).fill(Number).map((i, key) => makeOrder(users[0]))
  );
  const orderProducts = await Promise.all(
    new Array(20)
      .fill(Number)
      .map((i, key) => orderProduct(orders, key, products))
  );
  // Cleanup
  // await Promise.all(tables.map((table) => knex(table).del()));

  const table_deletion_order = [
    'order_product',
    'orders',
    'products',
    'brands',
    'categories',
    'users',
  ];

  for await (const item of table_deletion_order) {
    await knex(item).delete();
  }

  // Addd new seeds
  await knex('categories').insert(categories);
  await knex('users').insert(users);
  await knex('brands').insert(brands);
  await knex('products').insert(products);
  await knex('orders').insert(orders);
  await knex('order_product').insert(orderProducts.flat(Infinity));
};
