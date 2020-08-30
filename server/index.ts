import express from 'express';
import dotenv from 'dotenv';
import users from './routes/users';
import products from './routes/products';
import order from './routes/orders';
import cors from 'cors';
import { db } from './db';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', users);
app.use('/products', products);
app.use('/orders', order);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
