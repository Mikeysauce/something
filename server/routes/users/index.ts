import express from 'express';
import sanitise from '../../util/sanitise';
import { query } from '../../db';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await query('select * from users');
    res.send(sanitise(rows));
  } catch (error) {
    res.status(503).end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await query('SELECT * FROM users WHERE id = $1', [id]);
    res.send(sanitise(rows));
  } catch (error) {
    res.status(503).end();
  }
});

export default router;
