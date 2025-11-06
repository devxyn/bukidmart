import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import vine from '@vinejs/vine';

import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory (you can change this to disk storage if needed)
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
});

vine.convertEmptyStringsToNull = true;

// Add multer middleware to handle multipart/form-data
app.use(upload.any());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Add a simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Move the production static files serving to a separate function
function setupProduction(app) {
  app.use(express.static(path.join(__dirname, '/client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

if (process.env.NODE_ENV === 'production') {
  setupProduction(app);
}

// Add error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  } else {
    console.error(err.message);
  }
  res.status(500).json({ message: 'Something went wrong. Please try again later.', success: false });
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}.`);
});
