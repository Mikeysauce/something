import express from 'express';
import dotenv from 'dotenv';
import users from './routes/users';

dotenv.config();

const app = express();
const PORT = 8000;

app.use('/users', users);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
