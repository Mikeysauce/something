import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { db } from '../../db';
import Knex from 'knex';

const router = express.Router();

router.get('/', async (req, res) => res.send(await db('users')));

// router.get('/:id/orders', async (req: Request, res: Response) => {
//   try {
//     const data = await db('orders').where('user_id', '=', req.params.id);
//     res.send(data);
//   } catch (error) {
//     res.status(403).send(error);
//   }
// });

// router.get('/:id/orders', async (req: Request, res: Response) => {
//   try {
//     const data = await db('orders')
//       .select(['orders.*', db.raw('to_json(products.*) as product')])
//       .join('products', { 'products.id': 'product_id' })
//       .orderBy('updated_at', 'desc');
//     res.send(data);
//   } catch (error) {
//     res.status(403).send(error);
//   }
// });
router.get('/:id/orders', async (req: Request, res: Response) => {
  const data = await db('orders')
    .select([
      'orders.status',
      'orders.id',
      'orders.updated_at',
      db.raw('sum(products.price) as total'),
      db.raw('json_agg(products.*) as products'),
    ])
    .innerJoin('order_product', 'orders.id', 'order_product.order_id')
    .innerJoin('products', 'products.id', 'order_product.product_id')
    .groupBy('orders.id', 'order_product.order_id')
    .orderBy('orders.updated_at', 'desc')
    .where('orders.user_id', '=', req.params.id);

  res.send(data);
});

router.post('/register', async (req, res) => {
  try {
    const { password, passwordConfirm, ...user } = req.body;

    if (password !== passwordConfirm) {
      return res.status(403).send('Passwords dont match');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      ...user,
      id: v4(),
      password: hashedPassword,
    };

    await db('users').insert(userData);

    return res.send(userData);
  } catch (error) {
    console.log(error);
    return res.status(403).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const dbuser = await db('users').where({ email }).first();

    console.log(dbuser);

    if (!(await bcrypt.compare(password, dbuser.password))) {
      return res.status(401).send('No');
    }
    return res.send(dbuser);
  } catch (error) {
    console.error(error);
    return res.status(403).send(error);
  }
});

export default router;
