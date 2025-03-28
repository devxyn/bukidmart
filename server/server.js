import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}.`);
});
