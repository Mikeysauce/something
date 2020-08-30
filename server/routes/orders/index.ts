import express from 'express';
import { db } from '../../db';

const router = express.Router();

router.get('/:id', async (req, res) => {
  console.log('hmm');
  try {
    const data = await db('orders')
      .select([
        'orders.status',
        'orders.delivery_address',
        'orders.tracking_code',
        'orders.id',
        'orders.updated_at',
        db.raw(
          `json_agg(json_build_object('product', products.*, 'category', categories.*)) AS products`
        ),
        db.raw('sum(products.price) as total'),
      ])
      .innerJoin('order_product', 'orders.id', 'order_product.order_id')
      .innerJoin('products', 'products.id', 'order_product.product_id')
      .innerJoin('categories', 'products.category_id', 'categories.id')
      .groupBy('orders.id', 'order_product.order_id')
      .where('orders.id', '=', req.params.id)
      .first();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
