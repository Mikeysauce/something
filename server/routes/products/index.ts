import express from 'express';
import { db } from '../../db';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('products');
  try {
    const data = await db('products');
    res.send(data);
  } catch (error) {
    res.send(error);
  }
  // const data = await db('products')
  //   .select([
  //     'products.*',
  //     db.raw('to_json(brands.*) as brand'),
  //     db.raw('to_json(categories.*) as category'),
  //   ])
  //   .join('brands', { 'brands.id': 'brand_id' })
  //   .join('categories', { 'products.category_id': 'categories.id' });
});

export default router;
