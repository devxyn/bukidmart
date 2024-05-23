import express from 'express';
import process from 'node:process';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import { authRoutes } from './routes/authRoutes.js';
import { productRoutes } from './routes/productRoutes.js';
import { cartRoutes } from './routes/cartRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

try {
  await mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.lpsgwhq.mongodb.net/`, {
    dbName: process.env.DB_NAME,
  });
  console.log('Connected to database!');
} catch (e) {
  app.use((_, res) => {
    res.status(500).json({
      message: 'Database connection error',
      error: e.message,
    });
  });
}

app.use(bodyParser.json());
app.use(cors());

app.use((err, _, res, __) => {
  console.error(err.stack);

  return res.status(500).json({
    error: err?.message ?? 'Something went wrong',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
